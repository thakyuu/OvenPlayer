import OvenPlayerSDK, {checkAndGetContainerElement} from './ovenplayer.sdk'
import View from './view/view';
import dom from './utils/polyfills/dom.js';
import 'babel-polyfill';
import {getScriptPath} from 'utils/webpack';


__webpack_public_path__ = getScriptPath('ovenplayer.js');

if (!__webpack_public_path__) {
    __webpack_public_path__ = window.OVENPLAYER_LOCATION;
}

if (!__webpack_public_path__) {
    console.error('Please set window.OVENPLAYER_LOCATION where path of OvenPlayer in your environment.')
}

function ovenPlayerFactory() {

    const OvenPlayer = {};

    Object.assign(OvenPlayer, OvenPlayerSDK);

    OvenPlayer.create = function (container, options) {

        let containerElement = checkAndGetContainerElement(container);

        let player = View(containerElement);

        if (!window.console || Object.keys(window.console).length === 0) {
            window.console = {
                log: function () {
                },
                info: function () {
                },
                error: function () {
                },
                warn: function () {
                }
            };
        }
        if (!window.OvenPlayerConsole || Object.keys(window.OvenPlayerConsole).length === 0) {
            window.OvenPlayerConsole = {};
            OvenPlayerConsole['log'] = function () {
            };
        }

        const playerInstance = OvenPlayerSDK.create(player.getMediaElementContainer(), options);

        if (options.debug) {
            playerInstance.log = window['console']['log'];
        }

        Object.assign(playerInstance, {
            getContainerId: function () {
                return containerElement.id;
            }
        });

        player.setApi(playerInstance);

        return playerInstance;
    };

    return OvenPlayer
}

export default ovenPlayerFactory()