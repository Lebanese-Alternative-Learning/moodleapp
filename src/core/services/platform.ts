// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { makeSingleton } from '@singletons';

/**
 * Extend Ionic's Platform service.
 */
@Injectable({ providedIn: 'root' })
export class CorePlatformService extends Platform {

    /**
     * Checks if the app is running in a mobile or tablet device (Cordova).
     *
     * @return Whether the app is running in a mobile or tablet device.
     */
    isMobile(): boolean {
        return this.is('cordova');
    }

}

export const CorePlatform = makeSingleton(CorePlatformService);
