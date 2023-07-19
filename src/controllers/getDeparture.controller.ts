import repository from"../repositories/getDepBoard.repository"
const GetArrDepBoardWithDetails = async (req, res, next) => {
    try {
        const payload = req.body;
        const depBoard = await repository.GetArrDepBoardWithDetails(payload); ;
        if (!depBoard) {
            return res.status(400).json({ sucess: false });
        }
        res.status(200).json({ success: true, depBoard });
    } catch (err) {
        next(err);
    }
};
const getDepartureBoard = async (req, res, next) => {
    try {
        console.log(req.query)
        const payload = req.query;
        const depBoard = await repository.getDepartureBoard(payload); ;
        if (!depBoard) {
            return res.status(400).json({ sucess: false });
        }
        res.status(200).json({ success: true, depBoard });
    } catch (err) {
        next(err);
    }
};

const getDepBoardWithDetails = async (req, res, next) => {
    try {
        const payload = req.body;
        const depBoard = await repository.getDepBoardWithDetails(payload); ;
        if (!depBoard) {
            return res.status(400).json({ sucess: false });
        }
        res.status(200).json({ success: true, depBoard });
    } catch (err) {
        next(err);
    }
};

const GetArrivalDepartureBoard = async (req, res, next) => {
    try {
        const payload = req.body;
        const depBoard = await repository.GetArrivalDepartureBoard(payload); ;
        if (!depBoard) {
            return res.status(400).json({ sucess: false });
        }
        res.status(200).json({ success: true, depBoard });
    } catch (err) {
        next(err);
    }
};

const controller = {
    GetArrivalDepartureBoard,
    GetArrDepBoardWithDetails,
    getDepartureBoard,
    getDepBoardWithDetails
};



export default controller;