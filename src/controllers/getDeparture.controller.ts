import repository from"../repositories/getDepBoard.repository"
const GetArrDepBoardWithDetails = async (req, res, next) => {
    try {
        const depBoard = await repository.getArrDepBoardWithDetails(); ;
        if (!depBoard) {
            return res.status(400).json({ sucess: false });
        }
        res.status(200).json({ success: true, depBoard });
    } catch (err) {
        next(err);
    }
};

const controller = {
    GetArrDepBoardWithDetails
};



export default controller;