import repository from"../repositories/getArrBoard"
const GetArrBoardWithDetails = async (req, res, next) => {
    try {
        const payload = req.body;
        const depBoard = await repository.GetArrBoardWithDetails(payload); ;
        if (!depBoard) {
            return res.status(400).json({ sucess: false });
        }
        res.status(200).json({ success: true, depBoard });
    } catch (err) {
        next(err);
    }
};
const GetArrivalBoard = async (req, res, next) => {
    try {
        const payload = req.body;
        const depBoard = await repository.GetArrivalBoard(payload); ;
        if (!depBoard) {
            return res.status(400).json({ sucess: false });
        }
        res.status(200).json({ success: true, depBoard });
    } catch (err) {
        next(err);
    }
};

const controller = {
    GetArrBoardWithDetails,
    GetArrivalBoard,
};



export default controller;