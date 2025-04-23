<?php
namespace App\Http\Controllers\Api\V1;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Requests\AuthRequest;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Cookie;
use App\Http\Resources\UserResource;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Models\User;

class AuthController extends Controller
{

    public function __construct()
    {
        // $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function login(AuthRequest $request)
    {
        $credentials = [
            'email' => $request->input('email'),
            'password' => $request->input('password')
        ];

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Tài khoản hoặc mật khẩu không chính xác'], Response::HTTP_UNAUTHORIZED);
        }

        $user = auth()->user();

        $refreshTokenData = $this->refreshTokenData($user);

        $refresh_token = JWTAuth::getJWTProvider()->encode($refreshTokenData);

        $cookie = $this->setTokenAndRefreshTokenCookie($token, $refresh_token);

        $tokenCookie = $cookie['token'];
        $refreshCookie = $cookie['refreshToken'];

        return $this->respondWithToken($token, $refresh_token, $user)->withCookie($tokenCookie)->withCookie($refreshCookie);
    }

    public function refresh(Request $request)
    {
        try {
            if ($request->hasCookie('access_token')) {
                $token = $request->cookie('access_token');
                $request->headers->set('Authorization', 'Bearer ' . $token);
            }
            $user = JWTAuth::parseToken()->authenticate();

            $token = auth()->refresh();
            $refreshTokenData = $this->refreshTokenData($user);
            $refreshToken = JWTAuth::getJWTProvider()->encode($refreshTokenData);
            $cookie = $this->setTokenAndRefreshTokenCookie($token, $refreshToken);
            $tokenCookie = $cookie['token'];
            $refreshCookie = $cookie['refreshToken'];

            return $this->respondWithToken($token, $refreshToken, $user)->withCookie($tokenCookie)->withCookie($refreshCookie);
            
        } catch (TokenExpiredException $e) {

            if($request->hasCookie('refresh_token')) {
                $refreshTokenCookie = $request->cookie('refresh_token');
                $refreshTokenDecoded = JWTAuth::getJWTProvider()->decode($refreshTokenCookie);
                $user = User::find($refreshTokenDecoded['user_id']);
                $token = auth()->login($user);

                $refreshTokenData = $this->refreshTokenData($user);
                $refreshToken = JWTAuth::getJWTProvider()->encode($refreshTokenData);

                $cookie = $this->setTokenAndRefreshTokenCookie($token, $refreshToken);
                $tokenCookie = $cookie['token'];
                $refreshCookie = $cookie['refreshToken'];


                return $this->respondWithToken($token, $refreshToken, $user)->withCookie($tokenCookie)->withCookie($refreshCookie);
                
            }

            return response()->json(['message' => 'Token has expired'], 401);
        } catch (JWTException $e) {
            return response()->json(['message' => 'Token is invalid'], 401);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Token not found'], 500);
        }
    }

    protected function respondWithToken($token, $refresh_token,$user)
    {
        return response()->json([
            'user' => new UserResource($user),
            'access_token' => $token,
            'refresh_token' => $refresh_token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 1
        ]);
    }

    public function me () {
        $user = auth()->user();
        return response()->json([
            'user' => new UserResource($user),
        ]);
    }

    private function setTokenAndRefreshTokenCookie($token, $refreshToken) {

        $cookie = Cookie::make(
            'access_token',
            $token,
            auth()->factory()->getTTL() * 60 * 24,
            '/',
            null,
            true,
            true,
            false,
            'None'
        );

        $refreshCookie = Cookie::make(
            'refresh_token',
            $refreshToken,
            config('jwt.refresh_ttl'),
            '/',
            null,
            true,
            true,
            false,
            'None'
        );

        return [
            'token' => $cookie,
            'refreshToken' => $refreshCookie];

    }

    private function refreshTokenData($user) {
        return [
            'user_id' => $user->id,
            'expires_in' => time() + config('jwt.refresh_ttl'),
            'random' => time().md5(rand())
        ];
    }

    private function refreshToken($user, $refreshToken) {
        $refreshTokenData = $this->refreshTokenData($user);
        return JWTAuth::getJWTProvider()->encode($refreshTokenData);
    }
}
