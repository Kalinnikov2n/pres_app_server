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
var queryDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n      todosList: String\n  }\n\n  type Mutation {\n  }\n"], ["\n  type Query {\n      todosList: String\n  }\n\n  type Mutation {\n  }\n"])));
exports.schemas = [todosTypes, queryDefs];
var templateObject_1;


/***/ }),

/***/ "./src/schemas/todos/todosTypes.ts":
false,

/***/ "apollo-server-core":
false

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYXMvc2NoZW1hcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxjQUFjLG1CQUFPLENBQUMsd0JBQVM7QUFDL0IsYUFBYSxtQkFBTyxDQUFDLHNCQUFRO0FBQzdCLFdBQVcsbUJBQU8sQ0FBQyxrQkFBTTtBQUN6Qiw2QkFBNkIsbUJBQU8sQ0FBQywyQ0FBZTtBQUNwRCw4QkFBOEIsbUJBQU8sQ0FBQyxvREFBdUI7QUFDN0QsZUFBZSxtQkFBTyxDQUFDLCtDQUFpQjtBQUN4QyxnQkFBZ0IsbUJBQU8sQ0FBQyxtREFBbUI7QUFDM0Msa0JBQWtCLG1CQUFPLENBQUMsMkRBQXVCO0FBQ2pEO0FBQ0EsaUJBQWlCLG1CQUFPLENBQUMsZ0NBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EseUJBQXlCLGVBQWU7QUFDeEMsd0JBQXdCLGVBQWU7QUFDdkMsK0JBQStCLCtCQUErQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsSUFBSSxJQUFVO0FBQ2Q7QUFDQSxvQ0FBb0Msc0JBQXNCLEVBQUU7QUFDNUQ7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlDYTtBQUNiO0FBQ0EsZ0NBQWdDLHVDQUF1QyxhQUFhLEVBQUUsRUFBRSxPQUFPLGtCQUFrQjtBQUNqSDtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSw4QkFBOEIsbUJBQU8sQ0FBQyxvREFBdUI7QUFDN0QsMkhBQTJILDhCQUE4QixxQkFBcUIsS0FBSyx3QkFBd0IsOEJBQThCLHFCQUFxQixLQUFLO0FBQ25RO0FBQ0EiLCJmaWxlIjoibWFpbi4wZjQyNWZjMzQzYWU0MmE2M2ZmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZXhwcmVzcyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xudmFyIG1vcmdhbiA9IHJlcXVpcmUoXCJtb3JnYW5cIik7XG52YXIgY29ycyA9IHJlcXVpcmUoXCJjb3JzXCIpO1xudmFyIG1haW5fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXMvbWFpblwiKSk7XG52YXIgYXBvbGxvX3NlcnZlcl9leHByZXNzXzEgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIpO1xudmFyIGNvbmZpZ18xID0gcmVxdWlyZShcIi4vY29uZmlnL2NvbmZpZ1wiKTtcbnZhciBzY2hlbWFzXzEgPSByZXF1aXJlKFwiLi9zY2hlbWFzL3NjaGVtYXNcIik7XG52YXIgcmVzb2x2ZXJzXzEgPSByZXF1aXJlKFwiLi9yZXNvbHZlcnMvcmVzb2x2ZXJzXCIpO1xudmFyIGFwcCA9IGV4cHJlc3MoKTtcbnZhciBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTtcbmFwcC51c2UoY29ycyh7XG4gICAgb3JpZ2luOiAnKicsXG4gICAgY3JlZGVudGlhbHM6IHRydWUsXG59KSk7XG5hcHAudXNlKG1vcmdhbignc2hvcnQnKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbih7IGxpbWl0OiAnNW1iJyB9KSk7XG5hcHAudXNlKGJvZHlQYXJzZXIucmF3KHsgbGltaXQ6ICc1bWInIH0pKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgbGltaXQ6ICc1bWInLCBleHRlbmRlZDogdHJ1ZSB9KSk7XG5hcHAudXNlKG1haW5fMS5kZWZhdWx0KTtcbnZhciBwbGF5Z3JvdW5kID0gdHJ1ZTtcbnZhciBzZXJ2ZXIgPSBuZXcgYXBvbGxvX3NlcnZlcl9leHByZXNzXzEuQXBvbGxvU2VydmVyKHtcbiAgICB0eXBlRGVmczogc2NoZW1hc18xLnNjaGVtYXMsXG4gICAgcmVzb2x2ZXJzOiByZXNvbHZlcnNfMS5yZXNvbHZlcnMsXG4gICAgaW50cm9zcGVjdGlvbjogdHJ1ZSxcbiAgICBwbGF5Z3JvdW5kOiBwbGF5Z3JvdW5kLFxufSk7XG5zZXJ2ZXIuYXBwbHlNaWRkbGV3YXJlKHtcbiAgICBhcHA6IGFwcCxcbiAgICBwYXRoOiAnL2dyYXBocWwnLFxuICAgIGNvcnM6IHtcbiAgICAgICAgb3JpZ2luOiAnKicsXG4gICAgICAgIGNyZWRlbnRpYWxzOiB0cnVlLFxuICAgIH0sXG59KTtcbmFwcC5saXN0ZW4oY29uZmlnXzEuY29uZmlnLnBvcnQsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcIlJlYWR5IGF0IGh0dHA6Ly9sb2NhbGhvc3Q6XCIgKyBjb25maWdfMS5jb25maWcucG9ydCArIHNlcnZlci5ncmFwaHFsUGF0aCk7XG59KTtcbmlmIChtb2R1bGUuaG90KSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyLnN0b3AoKTsgfSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBhcHA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX21ha2VUZW1wbGF0ZU9iamVjdCA9ICh0aGlzICYmIHRoaXMuX19tYWtlVGVtcGxhdGVPYmplY3QpIHx8IGZ1bmN0aW9uIChjb29rZWQsIHJhdykge1xuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gICAgcmV0dXJuIGNvb2tlZDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNjaGVtYXMgPSB2b2lkIDA7XG52YXIgYXBvbGxvX3NlcnZlcl9leHByZXNzXzEgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIpO1xudmFyIHF1ZXJ5RGVmcyA9IGFwb2xsb19zZXJ2ZXJfZXhwcmVzc18xLmdxbCh0ZW1wbGF0ZU9iamVjdF8xIHx8ICh0ZW1wbGF0ZU9iamVjdF8xID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICB0eXBlIFF1ZXJ5IHtcXG4gICAgICB0b2Rvc0xpc3Q6IFN0cmluZ1xcbiAgfVxcblxcbiAgdHlwZSBNdXRhdGlvbiB7XFxuICB9XFxuXCJdLCBbXCJcXG4gIHR5cGUgUXVlcnkge1xcbiAgICAgIHRvZG9zTGlzdDogU3RyaW5nXFxuICB9XFxuXFxuICB0eXBlIE11dGF0aW9uIHtcXG4gIH1cXG5cIl0pKSk7XG5leHBvcnRzLnNjaGVtYXMgPSBbdG9kb3NUeXBlcywgcXVlcnlEZWZzXTtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==