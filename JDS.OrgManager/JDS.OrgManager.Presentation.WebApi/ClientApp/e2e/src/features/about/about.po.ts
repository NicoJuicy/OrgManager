// Copyright (c)2020 Jacobs Data Solutions

// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the
// License at

// http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
// CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
import { browser, by, element } from "protractor";

export class AboutPage {
  navigateTo() {
    return browser.get("/about");
  }

  getParagraphText() {
    return element(by.css("h1")).getText();
  }

  getGettingStarted() {
    return element(by.css(".get-started"));
  }

  getActionButton(idx) {
    return element.all(by.css(".actions a")).get(idx);
  }
}
