/**
 * Provide a standardised method to build request responses
 */

export default class ResponseBuilder {
    /**
     * constructor
     * @param res Response object
     */
    constructor(res) {
        this.response = res;
        this.clientResponse = {};
        this.data = {};
        this.status = {};
        this.errors = {};
    }

    /**
     * Send response to client
     */
    sendResponse() {
        // Assemble the response
        this.clientResponse.data = this.data;
        if (this.errors) {
            this.clientResponse.errors = this.errors;
        }
        this.response.send(JSON.stringify(this.clientResponse));
        return true;
    }
}

