/**
 * Created by zhuyongxuan1 on 16/3/15.
 */
var express = require('express'),
    bodyParser = require('body-parser');

var leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all(function (req, res, next) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        next();
    })

    .get(function (req, res, next) {
        res.end('Will send all the leadership to you!');
    })

    .post(function (req, res, next) {
        res.end('Will add the leadership: ' + req.body.name + ' with details: ' + req.body.description);
    })

    .delete(function (req, res, next) {
        res.end('Deleting all leadership');
    });

leaderRouter.route('/:leaderId')
    .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
    })

    .get(function(req,res,next){
        res.end('Will send details of the leadership: ' + req.params.leaderId +' to you!');
    })

    .put(function(req, res, next){
        res.write('Updating the leadership: ' + req.params.leaderId + '\n');
        res.end('Will update the leadership: ' + req.body.name +
            ' with details: ' + req.body.description);
    })

    .delete(function(req, res, next){
        res.end('Deleting leadership: ' + req.params.leaderId);
    });

module.exports = leaderRouter;