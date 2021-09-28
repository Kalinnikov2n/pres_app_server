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
var resolvers_1 = __webpack_require__(/*! ./resolvers/resolvers */ "./src/resolvers/resolvers.ts");
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
    resolvers: resolvers_1.resolvers,
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


/***/ }),

/***/ "./src/schemas/schemas.ts":
/*!********************************!*\
  !*** ./src/schemas/schemas.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemas = void 0;
var apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
todosTypes;
var queryDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    todosList: String\n  }\n"], ["\n  type Query {\n    todosList: String\n  }\n"])));
exports.schemas = [queryDefs];
var templateObject_1;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYXMvc2NoZW1hcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxjQUFjLG1CQUFPLENBQUMsd0JBQVM7QUFDL0IsYUFBYSxtQkFBTyxDQUFDLHNCQUFRO0FBQzdCLFdBQVcsbUJBQU8sQ0FBQyxrQkFBTTtBQUN6Qiw2QkFBNkIsbUJBQU8sQ0FBQywyQ0FBZTtBQUNwRCw4QkFBOEIsbUJBQU8sQ0FBQyxvREFBdUI7QUFDN0QsZUFBZSxtQkFBTyxDQUFDLCtDQUFpQjtBQUN4QyxnQkFBZ0IsbUJBQU8sQ0FBQyxtREFBbUI7QUFDM0Msa0JBQWtCLG1CQUFPLENBQUMsMkRBQXVCO0FBQ2pEO0FBQ0EsaUJBQWlCLG1CQUFPLENBQUMsZ0NBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EseUJBQXlCLGVBQWU7QUFDeEMsd0JBQXdCLGVBQWU7QUFDdkMsK0JBQStCLCtCQUErQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsSUFBSSxJQUFVO0FBQ2Q7QUFDQSxvQ0FBb0Msc0JBQXNCLEVBQUU7QUFDNUQ7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlDYTtBQUNiO0FBQ0EsZ0NBQWdDLHVDQUF1QyxhQUFhLEVBQUUsRUFBRSxPQUFPLGtCQUFrQjtBQUNqSDtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSw4QkFBOEIsbUJBQU8sQ0FBQyxvREFBdUI7QUFDN0Q7QUFDQSwySEFBMkgsNEJBQTRCLHdCQUF3Qiw0QkFBNEI7QUFDM007QUFDQSIsImZpbGUiOiJtYWluLjc4NmQ4ODE3ODk4ZGMwYWUyZTdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG52YXIgbW9yZ2FuID0gcmVxdWlyZShcIm1vcmdhblwiKTtcbnZhciBjb3JzID0gcmVxdWlyZShcImNvcnNcIik7XG52YXIgbWFpbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlcy9tYWluXCIpKTtcbnZhciBhcG9sbG9fc2VydmVyX2V4cHJlc3NfMSA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIik7XG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi9jb25maWcvY29uZmlnXCIpO1xudmFyIHNjaGVtYXNfMSA9IHJlcXVpcmUoXCIuL3NjaGVtYXMvc2NoZW1hc1wiKTtcbnZhciByZXNvbHZlcnNfMSA9IHJlcXVpcmUoXCIuL3Jlc29sdmVycy9yZXNvbHZlcnNcIik7XG52YXIgYXBwID0gZXhwcmVzcygpO1xudmFyIGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xuYXBwLnVzZShjb3JzKHtcbiAgICBvcmlnaW46ICcqJyxcbiAgICBjcmVkZW50aWFsczogdHJ1ZSxcbn0pKTtcbmFwcC51c2UobW9yZ2FuKCdzaG9ydCcpKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKHsgbGltaXQ6ICc1bWInIH0pKTtcbmFwcC51c2UoYm9keVBhcnNlci5yYXcoeyBsaW1pdDogJzVtYicgfSkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBsaW1pdDogJzVtYicsIGV4dGVuZGVkOiB0cnVlIH0pKTtcbmFwcC51c2UobWFpbl8xLmRlZmF1bHQpO1xudmFyIHBsYXlncm91bmQgPSB0cnVlO1xudmFyIHNlcnZlciA9IG5ldyBhcG9sbG9fc2VydmVyX2V4cHJlc3NfMS5BcG9sbG9TZXJ2ZXIoe1xuICAgIHR5cGVEZWZzOiBzY2hlbWFzXzEuc2NoZW1hcyxcbiAgICByZXNvbHZlcnM6IHJlc29sdmVyc18xLnJlc29sdmVycyxcbiAgICBpbnRyb3NwZWN0aW9uOiB0cnVlLFxuICAgIHBsYXlncm91bmQ6IHBsYXlncm91bmQsXG59KTtcbnNlcnZlci5hcHBseU1pZGRsZXdhcmUoe1xuICAgIGFwcDogYXBwLFxuICAgIHBhdGg6ICcvZ3JhcGhxbCcsXG4gICAgY29yczoge1xuICAgICAgICBvcmlnaW46ICcqJyxcbiAgICAgICAgY3JlZGVudGlhbHM6IHRydWUsXG4gICAgfSxcbn0pO1xuYXBwLmxpc3Rlbihjb25maWdfMS5jb25maWcucG9ydCwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiUmVhZHkgYXQgaHR0cDovL2xvY2FsaG9zdDpcIiArIGNvbmZpZ18xLmNvbmZpZy5wb3J0ICsgc2VydmVyLmdyYXBocWxQYXRoKTtcbn0pO1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXIuc3RvcCgpOyB9KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGFwcDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fbWFrZVRlbXBsYXRlT2JqZWN0ID0gKHRoaXMgJiYgdGhpcy5fX21ha2VUZW1wbGF0ZU9iamVjdCkgfHwgZnVuY3Rpb24gKGNvb2tlZCwgcmF3KSB7XG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgICByZXR1cm4gY29va2VkO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2NoZW1hcyA9IHZvaWQgMDtcbnZhciBhcG9sbG9fc2VydmVyX2V4cHJlc3NfMSA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIik7XG50b2Rvc1R5cGVzO1xudmFyIHF1ZXJ5RGVmcyA9IGFwb2xsb19zZXJ2ZXJfZXhwcmVzc18xLmdxbCh0ZW1wbGF0ZU9iamVjdF8xIHx8ICh0ZW1wbGF0ZU9iamVjdF8xID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICB0eXBlIFF1ZXJ5IHtcXG4gICAgdG9kb3NMaXN0OiBTdHJpbmdcXG4gIH1cXG5cIl0sIFtcIlxcbiAgdHlwZSBRdWVyeSB7XFxuICAgIHRvZG9zTGlzdDogU3RyaW5nXFxuICB9XFxuXCJdKSkpO1xuZXhwb3J0cy5zY2hlbWFzID0gW3F1ZXJ5RGVmc107XG52YXIgdGVtcGxhdGVPYmplY3RfMTtcbiJdLCJzb3VyY2VSb290IjoiIn0=