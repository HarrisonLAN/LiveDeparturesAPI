import repository from"../repositories/getFastest.repository"
const GetFastestDepartures = async (req, res, next) => {
    try {
        const payload = req.body;
        const depBoard = await repository.GetFastestDepartures(payload); ;
        res.status(200).json({ success: true, depBoard });
    } catch (err) {
        next(err);
    }
};
const GetFastestDeparturesWithDetails = async (req, res, next) => {
    try {
        const payload = req.body;
        const depBoard = await repository.GetFastestDeparturesWithDetails(payload); ;
        res.status(200).json({ success: true, depBoard });
    } catch (err) {
        next(err);
    }
};

const GetNextDepartures = async (req, res, next) => {
    try {
        const payload = req.body;
        const depBoard = await repository.GetNextDepartures(payload); ;
        res.status(200).json({ success: true, depBoard });
    } catch (err) {
        next(err);
    }
};

const GetNextDeparturesWithDetails = async (req, res, next) => {
    try {
        const payload = req.body;
        const depBoard = await repository.GetNextDeparturesWithDetails(payload); ;
        res.status(200).json({ success: true, depBoard });
    } catch (err) {
        next(err);
    }
};

const controller = {
    GetFastestDepartures,
    GetFastestDeparturesWithDetails,
    GetNextDepartures,
    GetNextDeparturesWithDetails
};



export default controller;