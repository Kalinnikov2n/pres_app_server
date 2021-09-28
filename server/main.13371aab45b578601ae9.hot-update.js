exports.id = "main";
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(/*! express */ "express");
var morgan = __webpack_require__(/*! morgan */ "morgan");
var cors = __webpack_require__(/*! cors */ "cors");
var main_1 = __importDefault(__webpack_require__(/*! ./routes/main */ "./src/routes/main.ts"));
var apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
var config_1 = __webpack_require__(/*! ./config/config */ "./src/config/config.ts");
var schemas_1 = __webpack_require__(/*! ./schemas/schemas */ "./src/schemas/schemas.ts");
var app = express();
var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
app.use(cors({
    origin: '*',
    credentials: true,
}));
app.use(morgan('short'));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.raw({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
app.use(main_1.default);
var playground = true;
var server = new apollo_server_express_1.ApolloServer({
    typeDefs: schemas_1.schemas,
    resolvers: resolvers,
    introspection: true,
    playground: playground,
});
server.applyMiddleware({
    app: app,
    path: '/graphql',
    cors: {
        origin: '*',
        credentials: true,
    },
});
app.listen(config_1.config.port, function () {
    console.log("Ready at http://localhost:" + config_1.config.port + server.graphqlPath);
});
if (true) {
    module.hot.accept();
    module.hot.dispose(function () { return server.stop(); });
}
exports.default = app;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsY0FBYyxtQkFBTyxDQUFDLHdCQUFTO0FBQy9CLGFBQWEsbUJBQU8sQ0FBQyxzQkFBUTtBQUM3QixXQUFXLG1CQUFPLENBQUMsa0JBQU07QUFDekIsNkJBQTZCLG1CQUFPLENBQUMsMkNBQWU7QUFDcEQsOEJBQThCLG1CQUFPLENBQUMsb0RBQXVCO0FBQzdELGVBQWUsbUJBQU8sQ0FBQywrQ0FBaUI7QUFDeEMsZ0JBQWdCLG1CQUFPLENBQUMsbURBQW1CO0FBQzNDO0FBQ0EsaUJBQWlCLG1CQUFPLENBQUMsZ0NBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EseUJBQXlCLGVBQWU7QUFDeEMsd0JBQXdCLGVBQWU7QUFDdkMsK0JBQStCLCtCQUErQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsSUFBSSxJQUFVO0FBQ2Q7QUFDQSxvQ0FBb0Msc0JBQXNCLEVBQUU7QUFDNUQ7QUFDQSIsImZpbGUiOiJtYWluLjEzMzcxYWFiNDViNTc4NjAxYWU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG52YXIgbW9yZ2FuID0gcmVxdWlyZShcIm1vcmdhblwiKTtcbnZhciBjb3JzID0gcmVxdWlyZShcImNvcnNcIik7XG52YXIgbWFpbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlcy9tYWluXCIpKTtcbnZhciBhcG9sbG9fc2VydmVyX2V4cHJlc3NfMSA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIik7XG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi9jb25maWcvY29uZmlnXCIpO1xudmFyIHNjaGVtYXNfMSA9IHJlcXVpcmUoXCIuL3NjaGVtYXMvc2NoZW1hc1wiKTtcbnZhciBhcHAgPSBleHByZXNzKCk7XG52YXIgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG5hcHAudXNlKGNvcnMoe1xuICAgIG9yaWdpbjogJyonLFxuICAgIGNyZWRlbnRpYWxzOiB0cnVlLFxufSkpO1xuYXBwLnVzZShtb3JnYW4oJ3Nob3J0JykpO1xuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oeyBsaW1pdDogJzVtYicgfSkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnJhdyh7IGxpbWl0OiAnNW1iJyB9KSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGxpbWl0OiAnNW1iJywgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuYXBwLnVzZShtYWluXzEuZGVmYXVsdCk7XG52YXIgcGxheWdyb3VuZCA9IHRydWU7XG52YXIgc2VydmVyID0gbmV3IGFwb2xsb19zZXJ2ZXJfZXhwcmVzc18xLkFwb2xsb1NlcnZlcih7XG4gICAgdHlwZURlZnM6IHNjaGVtYXNfMS5zY2hlbWFzLFxuICAgIHJlc29sdmVyczogcmVzb2x2ZXJzLFxuICAgIGludHJvc3BlY3Rpb246IHRydWUsXG4gICAgcGxheWdyb3VuZDogcGxheWdyb3VuZCxcbn0pO1xuc2VydmVyLmFwcGx5TWlkZGxld2FyZSh7XG4gICAgYXBwOiBhcHAsXG4gICAgcGF0aDogJy9ncmFwaHFsJyxcbiAgICBjb3JzOiB7XG4gICAgICAgIG9yaWdpbjogJyonLFxuICAgICAgICBjcmVkZW50aWFsczogdHJ1ZSxcbiAgICB9LFxufSk7XG5hcHAubGlzdGVuKGNvbmZpZ18xLmNvbmZpZy5wb3J0LCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJSZWFkeSBhdCBodHRwOi8vbG9jYWxob3N0OlwiICsgY29uZmlnXzEuY29uZmlnLnBvcnQgKyBzZXJ2ZXIuZ3JhcGhxbFBhdGgpO1xufSk7XG5pZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlci5zdG9wKCk7IH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gYXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==