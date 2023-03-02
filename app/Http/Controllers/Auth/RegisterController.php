<?php

namespace Pterodactyl\Http\Controllers\Auth;

use Carbon\CarbonImmutable;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Pterodactyl\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Contracts\View\View;
use Illuminate\Contracts\View\Factory as ViewFactory;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Pterodactyl\Services\Users\UserCreationService;
use Pterodactyl\Services\Helpers\SoftwareVersionService;

class RegisterController extends AbstractLoginController
{
    private ViewFactory $view;

    /**
     * @var \Pterodactyl\Services\Users\UserCreationService
     */
    protected $creationService;

    private SoftwareVersionService $versionService;

    /**
     * RegisterController constructor.
     */
    public function __construct(ViewFactory $view, UserCreationService $creationService, SoftwareVersionService $versionService)
    {
        parent::__construct();

        $this->view = $view;
        $this->creationService = $creationService;
        $this->versionService = $versionService;
    }

    /**
     * Handle all incoming requests for the authentication routes and render the
     * base authentication view component. Vuejs will take over at this point and
     * turn the login area into a SPA.
     */
    public function index(): View
    {
        return $this->view->make('templates/auth.core', [
            'version' => $this->versionService,
        ]);
    }

    /**
     * Handle a register request to the application.
     *
     * @return \Illuminate\Http\JsonResponse|void
     *
     * @throws \Pterodactyl\Exceptions\DisplayException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function register(Request $request): JsonResponse
    {
        if ($this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);
            $this->sendLockoutResponse($request);
        }

        $email = $request->input('email');
        $username = $request->input('username');
        $name_first = $request->input('nameFirst');
        $name_last = $request->input('nameLast');
        $password = $request->input('password');

        $data = array(
            'email' => $email,
            'username' => $username,
            'name_first' => $name_first,
            'name_last' => $name_last,
            'password' => $password,
            'root_admin' => false,
        );

        $user = $this->creationService->handle($data);

        $this->auth->guard()->login($user, true);

        return $this->sendLoginResponse($user, $request);
    }
}
