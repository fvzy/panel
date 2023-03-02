<?php

namespace Pterodactyl\Http\Requests\Admin\Settings;

use Illuminate\Validation\Rule;
use Pterodactyl\Http\Requests\Admin\AdminFormRequest;

class ThemeSettingsFormRequest extends AdminFormRequest
{
    /**
     * @return array
     */
    public function rules()
    {
        return [
            'pterodactyl:auth:register' => 'required|in:true,false',
            'app:logo' => 'required|string|max:191',
            'pterodactyl:colors:button-background' => 'required|string|regex:/(#[0-9a-fA-F]{6})/',
            'pterodactyl:colors:button-border' => 'required|string|regex:/(#[0-9a-fA-F]{6})/',
            'pterodactyl:colors:button-hover-background' => 'required|string|regex:/(#[0-9a-fA-F]{6})/',
            'pterodactyl:colors:button-hover-border' => 'required|string|regex:/(#[0-9a-fA-F]{6})/',
        ];
    }

    /**
     * @return array
     */
    public function attributes()
    {
        return [
            'pterodactyl:auth:register' => 'Registration',
            'app:logo' => 'Company Logo',
            'pterodactyl:colors:button-background' => 'Button Background Color',
            'pterodactyl:colors:button-border' => 'Button Border Color',
            'pterodactyl:colors:button-hover-background' => 'Hovered Button Background Color',
            'pterodactyl:colors:button-hover-border' => 'Hovered Button Border Color',
        ];
    }
}
