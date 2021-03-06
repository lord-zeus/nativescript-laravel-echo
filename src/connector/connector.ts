import { Channel, PresenceChannel } from './../channel';

export abstract class Connector {

    /**
     * Default connector options.
     *
     * @type {Object}
     */
    private _defaultOptions: any = {
        auth: {
            headers: {}
        },
        authEndpoint: '/broadcasting/auth',
        broadcaster: 'pusher',
        host: null,
        key: null,
        namespace: 'App.Events'
    };

    /**
     * Connector options.
     *
     * @type {object}
     */
    options: any;

    /**
     * Create a new class instance.
     *
     * @params  {any} options
     */
    constructor(options: any) {
        this.setOptions(options);

        this.connect();
    }

    /**
     * Merge the custom options with the defaults.
     *
     * @param  {any}  options
     * @return {any}
     */
    protected setOptions(options: any): any {
        this.options = Object.assign(this._defaultOptions, options);

        return options;
    }

    /**
     * Create a fresh connection.
     *
     * @retrn void
     */
    abstract connect(): void;

    /**
     * Get a channel instance by name.
     *
     * @param  {string}  channel
     * @return {PusherChannel}
     */
    abstract channel(channel: string): Channel;

    /**
     * Get a private channel instance by name.
     *
     * @param  {string} channel
     * @return {Channel}
     */
    abstract privateChannel(channel: string): Channel;

    /**
     * Get a presence channel instance by name.
     *
     * @param  {string} channel
     * @return {PresenceChannel}
     */
    abstract presenceChannel(channel: string): PresenceChannel;

    /**
     * Leave the given channel.
     *
     * @param  {string} channel
     * @return {void}
     */
    abstract leave(channel: string): void;

    /**
     * Get the socket_id of the connection.
     *
     * @return {string}
     */
    abstract socketId(): string;

    /**
     * Disconnect from the Echo server.
     *
     * @return void
     */
    abstract disconnect(): void;
}
