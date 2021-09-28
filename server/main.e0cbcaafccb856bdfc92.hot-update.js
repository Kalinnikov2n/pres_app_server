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

/***/ "./src/resolvers/resolvers.ts":
/*!************************************!*\
  !*** ./src/resolvers/resolvers.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
var item = {
    id: 'sdssdsd',
    title: 'sdds',
    des: des
};
exports.resolvers = {
    Query: {
        todosList: function () { },
        todoGet: function (params) {
            console.log(params);
        },
    },
    Mutation: {
        todosDeleteMutation: function (params) {
            console.log(params);
            return { id: '', };
        },
        todosUpdateMutation: function (params) {
            console.log(params);
        },
        todosCreateMutation: function (params) {
            console.log(params);
        },
    },
};


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc29sdmVycy9yZXNvbHZlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsY0FBYyxtQkFBTyxDQUFDLHdCQUFTO0FBQy9CLGFBQWEsbUJBQU8sQ0FBQyxzQkFBUTtBQUM3QixXQUFXLG1CQUFPLENBQUMsa0JBQU07QUFDekIsNkJBQTZCLG1CQUFPLENBQUMsMkNBQWU7QUFDcEQsOEJBQThCLG1CQUFPLENBQUMsb0RBQXVCO0FBQzdELGVBQWUsbUJBQU8sQ0FBQywrQ0FBaUI7QUFDeEMsZ0JBQWdCLG1CQUFPLENBQUMsbURBQW1CO0FBQzNDLGtCQUFrQixtQkFBTyxDQUFDLDJEQUF1QjtBQUNqRDtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLGdDQUFhO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHlCQUF5QixlQUFlO0FBQ3hDLHdCQUF3QixlQUFlO0FBQ3ZDLCtCQUErQiwrQkFBK0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNELElBQUksSUFBVTtBQUNkO0FBQ0Esb0NBQW9DLHNCQUFzQixFQUFFO0FBQzVEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5Q2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLEVBQUU7QUFDbEM7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMIiwiZmlsZSI6Im1haW4uZTBjYmNhYWZjY2I4NTZiZGZjOTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcbnZhciBtb3JnYW4gPSByZXF1aXJlKFwibW9yZ2FuXCIpO1xudmFyIGNvcnMgPSByZXF1aXJlKFwiY29yc1wiKTtcbnZhciBtYWluXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcm91dGVzL21haW5cIikpO1xudmFyIGFwb2xsb19zZXJ2ZXJfZXhwcmVzc18xID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiKTtcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuL2NvbmZpZy9jb25maWdcIik7XG52YXIgc2NoZW1hc18xID0gcmVxdWlyZShcIi4vc2NoZW1hcy9zY2hlbWFzXCIpO1xudmFyIHJlc29sdmVyc18xID0gcmVxdWlyZShcIi4vcmVzb2x2ZXJzL3Jlc29sdmVyc1wiKTtcbnZhciBhcHAgPSBleHByZXNzKCk7XG52YXIgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG5hcHAudXNlKGNvcnMoe1xuICAgIG9yaWdpbjogJyonLFxuICAgIGNyZWRlbnRpYWxzOiB0cnVlLFxufSkpO1xuYXBwLnVzZShtb3JnYW4oJ3Nob3J0JykpO1xuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oeyBsaW1pdDogJzVtYicgfSkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnJhdyh7IGxpbWl0OiAnNW1iJyB9KSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGxpbWl0OiAnNW1iJywgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuYXBwLnVzZShtYWluXzEuZGVmYXVsdCk7XG52YXIgcGxheWdyb3VuZCA9IHRydWU7XG52YXIgc2VydmVyID0gbmV3IGFwb2xsb19zZXJ2ZXJfZXhwcmVzc18xLkFwb2xsb1NlcnZlcih7XG4gICAgdHlwZURlZnM6IHNjaGVtYXNfMS5zY2hlbWFzLFxuICAgIHJlc29sdmVyczogcmVzb2x2ZXJzXzEucmVzb2x2ZXJzLFxuICAgIGludHJvc3BlY3Rpb246IHRydWUsXG4gICAgcGxheWdyb3VuZDogcGxheWdyb3VuZCxcbn0pO1xuc2VydmVyLmFwcGx5TWlkZGxld2FyZSh7XG4gICAgYXBwOiBhcHAsXG4gICAgcGF0aDogJy9ncmFwaHFsJyxcbiAgICBjb3JzOiB7XG4gICAgICAgIG9yaWdpbjogJyonLFxuICAgICAgICBjcmVkZW50aWFsczogdHJ1ZSxcbiAgICB9LFxufSk7XG5hcHAubGlzdGVuKGNvbmZpZ18xLmNvbmZpZy5wb3J0LCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJSZWFkeSBhdCBodHRwOi8vbG9jYWxob3N0OlwiICsgY29uZmlnXzEuY29uZmlnLnBvcnQgKyBzZXJ2ZXIuZ3JhcGhxbFBhdGgpO1xufSk7XG5pZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlci5zdG9wKCk7IH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gYXBwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlc29sdmVycyA9IHZvaWQgMDtcbnZhciBpdGVtID0ge1xuICAgIGlkOiAnc2Rzc2RzZCcsXG4gICAgdGl0bGU6ICdzZGRzJyxcbiAgICBkZXM6IGRlc1xufTtcbmV4cG9ydHMucmVzb2x2ZXJzID0ge1xuICAgIFF1ZXJ5OiB7XG4gICAgICAgIHRvZG9zTGlzdDogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICB0b2RvR2V0OiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgTXV0YXRpb246IHtcbiAgICAgICAgdG9kb3NEZWxldGVNdXRhdGlvbjogZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocGFyYW1zKTtcbiAgICAgICAgICAgIHJldHVybiB7IGlkOiAnJywgfTtcbiAgICAgICAgfSxcbiAgICAgICAgdG9kb3NVcGRhdGVNdXRhdGlvbjogZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocGFyYW1zKTtcbiAgICAgICAgfSxcbiAgICAgICAgdG9kb3NDcmVhdGVNdXRhdGlvbjogZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocGFyYW1zKTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=