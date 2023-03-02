{{-- Pterodactyl - Panel --}}
{{-- Copyright (c) 2015 - 2017 Dane Everitt <dane@daneeveritt.com> --}}

{{-- This software is licensed under the terms of the MIT license. --}}
{{-- https://opensource.org/licenses/MIT --}}
@extends('layouts.admin')

@section('title')
    Administration
@endsection

@section('content-header')
    <h1>Administrative Overview<small>A quick glance at your system.</small></h1>
    <ol class="breadcrumb">
        <li><a href="{{ route('admin.index') }}">Admin</a></li>
        <li class="active">Index</li>
    </ol>
@endsection

@section('content')
<div class="row">
    <div class="col-xs-12">
        <div class="box
            @if($version->isLatestPanel())
                box-success
            @else
                box-danger
            @endif
        ">
            <div class="box-header with-border">
                <h3 class="box-title">System Information</h3>
            </div>
            <div class="box-body">
                @if ($version->isLatestPanel())
                    You are running Pterodactyl Panel (with Professional theme) version <code>{{ config('app.version') }}</code>. Your panel is up-to-date!
                @else
                    Your panel is <strong>not up-to-date!</strong> The latest version is <code>{{ $version->getPanel() }}</code> and you are currently running version <code>{{ config('app.version') }}</code>.
                    You can get the latest version on Pterodactyl Market.
                @endif

                @if ($version->tamper())
                    <br>
                    Your panel <strong>doesn't appear to be a <a href="https://pterodactylmarket.com/resource/350">legitimate copy</a>.</strong> Possible reasons are:
                    <ul>
                        <li>you or someone else tampered with the panel;</li>
                        <li>you or someone else leaked the theme;</li>
                        <li>you have been scammed.</li>
                    </ul>
                    User experience may be strongly affected.
                    <br>
                    <img src="https://cdn.discordapp.com/attachments/896811482342375564/964837617378131968/unknown.png" style="width: 16rem;">
                @endif
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-xs-12 col-sm-4 text-center">
        <a href="{{ $version->getDiscord() }}"><button class="btn btn-danger" style="width:100%;"><i class="fa fa-fw fa-support"></i> Get Theme Support <small>(via Discord)</small></button></a>
    </div>
    <div class="col-xs-12 col-sm-4 text-center">
        <a href="https://pterodactyl.io"><button class="btn btn-primary" style="width:100%;"><i class="fa fa-fw fa-link"></i> Documentation</button></a>
    </div>
    <div class="col-xs-12 col-sm-4 text-center">
        <a href="{{ $version->getDonations() }}"><button class="btn btn-success" style="width:100%;"><i class="fa fa-fw fa-money"></i> Support the Pterodactyl Project</button></a>
    </div>
</div>
@endsection
