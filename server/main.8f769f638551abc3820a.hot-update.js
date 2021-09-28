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

/***/ "./src/routes/main.ts":
/*!****************************!*\
  !*** ./src/routes/main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
var router = express_1.default.Router();
router.get('/', function (req, res) { return res.redirect('/graphql'); });
exports.default = router;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGNBQWMsbUJBQU8sQ0FBQyx3QkFBUztBQUMvQixhQUFhLG1CQUFPLENBQUMsc0JBQVE7QUFDN0IsV0FBVyxtQkFBTyxDQUFDLGtCQUFNO0FBQ3pCLDZCQUE2QixtQkFBTyxDQUFDLDJDQUFlO0FBQ3BELDhCQUE4QixtQkFBTyxDQUFDLG9EQUF1QjtBQUM3RCxlQUFlLG1CQUFPLENBQUMsK0NBQWlCO0FBQ3hDLGdCQUFnQixtQkFBTyxDQUFDLG1EQUFtQjtBQUMzQyxrQkFBa0IsbUJBQU8sQ0FBQywyREFBdUI7QUFDakQ7QUFDQSxpQkFBaUIsbUJBQU8sQ0FBQyxnQ0FBYTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSx5QkFBeUIsZUFBZTtBQUN4Qyx3QkFBd0IsZUFBZTtBQUN2QywrQkFBK0IsK0JBQStCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRCxJQUFJLElBQVU7QUFDZDtBQUNBLG9DQUFvQyxzQkFBc0IsRUFBRTtBQUM1RDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOUNhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQ0FBZ0MsbUJBQU8sQ0FBQyx3QkFBUztBQUNqRDtBQUNBLHFDQUFxQyxpQ0FBaUMsRUFBRTtBQUN4RSIsImZpbGUiOiJtYWluLjhmNzY5ZjYzODU1MWFiYzM4MjBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG52YXIgbW9yZ2FuID0gcmVxdWlyZShcIm1vcmdhblwiKTtcbnZhciBjb3JzID0gcmVxdWlyZShcImNvcnNcIik7XG52YXIgbWFpbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlcy9tYWluXCIpKTtcbnZhciBhcG9sbG9fc2VydmVyX2V4cHJlc3NfMSA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIik7XG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi9jb25maWcvY29uZmlnXCIpO1xudmFyIHNjaGVtYXNfMSA9IHJlcXVpcmUoXCIuL3NjaGVtYXMvc2NoZW1hc1wiKTtcbnZhciByZXNvbHZlcnNfMSA9IHJlcXVpcmUoXCIuL3Jlc29sdmVycy9yZXNvbHZlcnNcIik7XG52YXIgYXBwID0gZXhwcmVzcygpO1xudmFyIGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xuYXBwLnVzZShjb3JzKHtcbiAgICBvcmlnaW46ICcqJyxcbiAgICBjcmVkZW50aWFsczogdHJ1ZSxcbn0pKTtcbmFwcC51c2UobW9yZ2FuKCdzaG9ydCcpKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKHsgbGltaXQ6ICc1bWInIH0pKTtcbmFwcC51c2UoYm9keVBhcnNlci5yYXcoeyBsaW1pdDogJzVtYicgfSkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBsaW1pdDogJzVtYicsIGV4dGVuZGVkOiB0cnVlIH0pKTtcbmFwcC51c2UobWFpbl8xLmRlZmF1bHQpO1xudmFyIHBsYXlncm91bmQgPSB0cnVlO1xudmFyIHNlcnZlciA9IG5ldyBhcG9sbG9fc2VydmVyX2V4cHJlc3NfMS5BcG9sbG9TZXJ2ZXIoe1xuICAgIHR5cGVEZWZzOiBzY2hlbWFzXzEuc2NoZW1hcyxcbiAgICByZXNvbHZlcnM6IHJlc29sdmVyc18xLnJlc29sdmVycyxcbiAgICBpbnRyb3NwZWN0aW9uOiB0cnVlLFxuICAgIHBsYXlncm91bmQ6IHBsYXlncm91bmQsXG59KTtcbnNlcnZlci5hcHBseU1pZGRsZXdhcmUoe1xuICAgIGFwcDogYXBwLFxuICAgIHBhdGg6ICcvZ3JhcGhxbCcsXG4gICAgY29yczoge1xuICAgICAgICBvcmlnaW46ICcqJyxcbiAgICAgICAgY3JlZGVudGlhbHM6IHRydWUsXG4gICAgfSxcbn0pO1xuYXBwLmxpc3Rlbihjb25maWdfMS5jb25maWcucG9ydCwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiUmVhZHkgYXQgaHR0cDovL2xvY2FsaG9zdDpcIiArIGNvbmZpZ18xLmNvbmZpZy5wb3J0ICsgc2VydmVyLmdyYXBocWxQYXRoKTtcbn0pO1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXIuc3RvcCgpOyB9KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGFwcDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGV4cHJlc3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZXhwcmVzc1wiKSk7XG52YXIgcm91dGVyID0gZXhwcmVzc18xLmRlZmF1bHQuUm91dGVyKCk7XG5yb3V0ZXIuZ2V0KCcvJywgZnVuY3Rpb24gKHJlcSwgcmVzKSB7IHJldHVybiByZXMucmVkaXJlY3QoJy9ncmFwaHFsJyk7IH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcm91dGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==