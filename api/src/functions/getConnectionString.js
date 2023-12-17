// Azure Function
module.exports = async function (context, req) {
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            connectionString: process.env.APP_INSIGHTS_CONNECTION_STRING
        }
    };
};