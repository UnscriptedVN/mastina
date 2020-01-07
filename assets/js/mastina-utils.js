/**
 * Mastina Utilities
 * (C) 2020 Marquis Kurt. All rights reserved.
 * 
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

function toggleZip() {
    let elements = document.getElementsByClassName("ms-navbar-links");
    console.log(elements);
    for (let element of elements) {
        element.classList.contains("ms-navbar-menu-open") 
            ? element.classList.remove("ms-navbar-menu-open")
            : element.classList.add("ms-navbar-menu-open")
    }; 
}
