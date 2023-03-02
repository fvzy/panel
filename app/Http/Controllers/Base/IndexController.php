<?php

namespace Pterodactyl\Http\Controllers\Base;

use Pterodactyl\Http\Controllers\Controller;
use Pterodactyl\Contracts\Repository\ServerRepositoryInterface;
use Pterodactyl\Services\Helpers\SoftwareVersionService;

class IndexController extends Controller
{
    /**
     * @var \Pterodactyl\Contracts\Repository\ServerRepositoryInterface
     */
    protected $repository;

    /**
     * @var \Pterodactyl\Services\Helpers\SoftwareVersionService
     */
    private $versionService;

    /**
     * IndexController constructor.
     */
    public function __construct(ServerRepositoryInterface $repository, SoftwareVersionService $versionService)
    {
        $this->repository = $repository;
        $this->versionService = $versionService;
    }

    /**
     * Returns listing of user's servers.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return view('templates/base.core', [
            'version' => $this->versionService,
        ]);
    }
}
