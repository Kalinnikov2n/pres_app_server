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
    typeDefs: schemas,
    resolvers: {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsY0FBYyxtQkFBTyxDQUFDLHdCQUFTO0FBQy9CLGFBQWEsbUJBQU8sQ0FBQyxzQkFBUTtBQUM3QixXQUFXLG1CQUFPLENBQUMsa0JBQU07QUFDekIsNkJBQTZCLG1CQUFPLENBQUMsMkNBQWU7QUFDcEQsOEJBQThCLG1CQUFPLENBQUMsb0RBQXVCO0FBQzdELGVBQWUsbUJBQU8sQ0FBQywrQ0FBaUI7QUFDeEM7QUFDQSxpQkFBaUIsbUJBQU8sQ0FBQyxnQ0FBYTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSx5QkFBeUIsZUFBZTtBQUN4Qyx3QkFBd0IsZUFBZTtBQUN2QywrQkFBK0IsK0JBQStCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNELElBQUksSUFBVTtBQUNkO0FBQ0Esb0NBQW9DLHNCQUFzQixFQUFFO0FBQzVEO0FBQ0EiLCJmaWxlIjoibWFpbi41MTdjMzJkZjRiOTY0OGVjMGEzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZXhwcmVzcyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xudmFyIG1vcmdhbiA9IHJlcXVpcmUoXCJtb3JnYW5cIik7XG52YXIgY29ycyA9IHJlcXVpcmUoXCJjb3JzXCIpO1xudmFyIG1haW5fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXMvbWFpblwiKSk7XG52YXIgYXBvbGxvX3NlcnZlcl9leHByZXNzXzEgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIpO1xudmFyIGNvbmZpZ18xID0gcmVxdWlyZShcIi4vY29uZmlnL2NvbmZpZ1wiKTtcbnZhciBhcHAgPSBleHByZXNzKCk7XG52YXIgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG5hcHAudXNlKGNvcnMoe1xuICAgIG9yaWdpbjogJyonLFxuICAgIGNyZWRlbnRpYWxzOiB0cnVlLFxufSkpO1xuYXBwLnVzZShtb3JnYW4oJ3Nob3J0JykpO1xuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oeyBsaW1pdDogJzVtYicgfSkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnJhdyh7IGxpbWl0OiAnNW1iJyB9KSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGxpbWl0OiAnNW1iJywgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuYXBwLnVzZShtYWluXzEuZGVmYXVsdCk7XG52YXIgcGxheWdyb3VuZCA9IHRydWU7XG52YXIgc2VydmVyID0gbmV3IGFwb2xsb19zZXJ2ZXJfZXhwcmVzc18xLkFwb2xsb1NlcnZlcih7XG4gICAgdHlwZURlZnM6IHNjaGVtYXMsXG4gICAgcmVzb2x2ZXJzOiB7fSxcbiAgICBpbnRyb3NwZWN0aW9uOiB0cnVlLFxuICAgIHBsYXlncm91bmQ6IHBsYXlncm91bmQsXG59KTtcbnNlcnZlci5hcHBseU1pZGRsZXdhcmUoe1xuICAgIGFwcDogYXBwLFxuICAgIHBhdGg6ICcvZ3JhcGhxbCcsXG4gICAgY29yczoge1xuICAgICAgICBvcmlnaW46ICcqJyxcbiAgICAgICAgY3JlZGVudGlhbHM6IHRydWUsXG4gICAgfSxcbn0pO1xuYXBwLmxpc3Rlbihjb25maWdfMS5jb25maWcucG9ydCwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiUmVhZHkgYXQgaHR0cDovL2xvY2FsaG9zdDpcIiArIGNvbmZpZ18xLmNvbmZpZy5wb3J0ICsgc2VydmVyLmdyYXBocWxQYXRoKTtcbn0pO1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXIuc3RvcCgpOyB9KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=