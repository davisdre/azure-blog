// This is an Azure Function
module.exports = async function (context, req) {
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: process.env.CONNECTION_STRING
    };
}