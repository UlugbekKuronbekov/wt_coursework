const UserS = require("../services/user");

const userService = new UserS();

class UserContrl {
    createEvent(req,res) {
        const user  = req.body;

        userService.create(user);

        res.send(user);
    }


    readAll(req,res) {
        const events = userService.readAll();

        res.send(events)
    }

    deleteById(req,res) {
        const {id} = req.params;

        userService.deleteById(id);

        res.send("deleted successfully");
    }

    readUsrById(req, res) {
        const {id} = req.params;

        const event = userService.readById(id);

        res.send(event);
    }

    update(req,res) {
        const event = req.body;

        const updatedEvent = userService.update(event);

        res.send(updatedEvent);
    }

}

module.exports = UserContrl;
