@extends('layouts.admin')

@section('title')
    Theme Settings
@endsection

@section('content-header')
    <h1>Theme Settings<small>Configure Professional to your liking.</small></h1>
    <ol class="breadcrumb">
        <li><a href="{{ route('admin.index') }}">Admin</a></li>
        <li class="active">Theme Settings</li>
    </ol>
@endsection

@section('content')
    {{-- i don't have much of a better place to put this tbh --}}
    <style id="previewButtonStyle">
        .previewButton {
            display: block;
            border-radius: 4px;
            text-transform: uppercase;
            letter-spacing: 0.025em;
            font-size: 14px;
            line-height: 20px;
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
            border-width: 1px;
            background-color: {{ config('pterodactyl.colors.button-background') }};
            border-color: {{ config('pterodactyl.colors.button-border') }};
            border-style: solid;
            color: hsl(202, 100%, 95%);
            padding: 8px 16px;
            margin: 0 auto;
        }

        .previewButton:hover:not(:disabled) {
            background-color: {{ config('pterodactyl.colors.button-hover-background') }};
            border-color: {{ config('pterodactyl.colors.button-hover-border') }};
        }
    </style>
    <script>
        // this is so fucking ugly
        // Pterodactyl v2.0 please save me from this
        window.addEventListener('load', () => {
            const styleNode = document.querySelector('#previewButtonStyle')

            const buttonBackgroundInput = document.querySelector('[name="pterodactyl:colors:button-background"]')
            const buttonHoverBackgroundInput = document.querySelector('[name="pterodactyl:colors:button-hover-background"]')
            const buttonBorderInput = document.querySelector('[name="pterodactyl:colors:button-border"]')
            const buttonHoverBorderInput = document.querySelector('[name="pterodactyl:colors:button-hover-border"]')

            document.querySelector('.previewButton').onclick = event => {
                event.preventDefault()
            }

            document.querySelector('#resetButton').onclick = event => {
                event.preventDefault()

                buttonBackgroundInput.value = '#0967D3'
                styleNode.sheet.cssRules[0].styleMap.set('background-color', buttonBackgroundInput.value)

                buttonHoverBackgroundInput.value = '#2487EB'
                styleNode.sheet.cssRules[1].styleMap.set('background-color', buttonHoverBackgroundInput.value)

                buttonBorderInput.value = '#01337E'
                styleNode.sheet.cssRules[0].styleMap.set('border-color', buttonBorderInput.value)

                buttonHoverBorderInput.value = '#0345A0'
                styleNode.sheet.cssRules[1].styleMap.set('border-color', buttonHoverBorderInput.value)
            }

            buttonBackgroundInput.oninput = event => {
                styleNode.sheet.cssRules[0].styleMap.set('background-color', event.target.value)
            }

            buttonHoverBackgroundInput.oninput = event => {
                styleNode.sheet.cssRules[1].styleMap.set('background-color', event.target.value)
            }

            buttonBorderInput.oninput = event => {
                styleNode.sheet.cssRules[0].styleMap.set('border-color', event.target.value)
            }

            buttonHoverBorderInput.oninput = event => {
                styleNode.sheet.cssRules[1].styleMap.set('border-color', event.target.value)
            }
        })
    </script>
    @yield('settings::nav')
    <div class="row">
        <form action="{{ route('admin.theme') }}" method="POST">
            <div class="col-xs-12 col-md-6">
                <div class="box">
                    <div class="box-header with-border">
                        <h3 class="box-title">Standard Settings</h3>
                    </div>
                        <div class="box-body">
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label class="control-label">Registration</label>
                                    <div>
                                        <select name="pterodactyl:auth:register" class="form-control">
                                            <option value="true">Enabled</option>
                                            <option value="false" @if(old('pterodactyl:auth:register', config('pterodactyl.auth.register')) == '0') selected @endif>Disabled</option>
                                        </select>
                                        <p class="text-muted"><small>If enabled, anyone will be able to create an account on the panel.</small></p>
                                    </div>
                                </div>
                                <div class="form-group col-md-6">
                                    <label class="control-label">Company Logo</label>
                                    <div>
                                        <input type="text" class="form-control" name="app:logo" value="{{ old('app:logo', config('app.logo')) }}" />
                                        <p class="text-muted"><small>This is the logo that is used throughout the panel.</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box-footer">
                            {!! csrf_field() !!}
                            <button type="submit" name="_method" value="PATCH" class="btn btn-sm btn-primary pull-right">Save</button>
                        </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-6">
                <div class="box">
                    <div class="box-header with-border">
                        <h3 class="box-title">Color Settings</h3>
                    </div>
                        <div class="box-body">
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label class="control-label">Button Background Color</label>
                                    <div>
                                        <input type="color" class="form-control" name="pterodactyl:colors:button-background" value="{{ old('pterodactyl:colors:button-background', config('pterodactyl.colors.button-background')) }}" />
                                    </div>
                                </div>
                                <div class="form-group col-md-6">
                                    <label class="control-label">Button Border Color</label>
                                    <div>
                                        <input type="color" class="form-control" name="pterodactyl:colors:button-border" value="{{ old('pterodactyl:colors:button-border', config('pterodactyl.colors.button-border')) }}" />
                                    </div>
                                </div>
                                <div class="form-group col-md-6">
                                    <label class="control-label">Hovered Button Background Color</label>
                                    <div>
                                        <input type="color" class="form-control" name="pterodactyl:colors:button-hover-background" value="{{ old('pterodactyl:colors:button-hover-background', config('pterodactyl.colors.button-hover-background')) }}" />
                                    </div>
                                </div>
                                <div class="form-group col-md-6">
                                    <label class="control-label">Hovered Button Border Color</label>
                                    <div>
                                        <input type="color" class="form-control" name="pterodactyl:colors:button-hover-border" value="{{ old('pterodactyl:colors:button-hover-border', config('pterodactyl.colors.button-hover-border')) }}" />
                                    </div>
                                </div>
                                <div class="form-group col-md-12">
                                    <label class="control-label">Preview</label>
                                    <button class="previewButton">Example Button</button>
                                </div>
                            </div>
                        </div>
                        <div class="box-footer">
                            <button class="btn btn-sm btn-danger" id="resetButton">Reset to defaults</button>
                            {!! csrf_field() !!}
                            <button type="submit" name="_method" value="PATCH" class="btn btn-sm btn-primary pull-right">Save</button>
                        </div>
                </div>
            </div>
        </form>
    </div>
@endsection
