/*
 * Copyright © 2018 Atomist, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as assert from "power-assert";

describe("empty", () => {
    /* By default, tests have logging turned off.
     * If you need to turn it on, uncomment this:
    before(() => configureLogging(MinimalLogging));
    * And you will need to
    import { configureLogging, MinimalLogging } from "@atomist/automation-client";
    */

    it("is true", () => {
        assert(true);
    });
});
