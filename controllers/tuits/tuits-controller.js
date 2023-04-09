import * as tuitsDao from '../../tuits/tuits-dao.js';
// import posts from './tuits.js';
// let tuits=posts;

const createTuit = async (req, res) => {
    const newTuit = req.body;
    // newTuit._id=(new Date()).getTime() + '';
    // newTuit.likes = 0;
    // newTuit.liked = false;
    // tuits.push(newTuit);
    // res.json(newTuit);
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}
const findTuits  = async (req, res) => {
    // res.json(tuits);
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}
const updateTuit = async (req, res) => {
    // const tuitId = req.params['tid'];
    // const updates = req.body;
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    // const tuitIndex = tuits.findIndex(t => t._id === tuitId)
    // tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
    // res.sendStatus(200);
    res.json(status);
}
const deleteTuit = async (req, res) => {
    // const tuitId = req.params['tid'];
    const tuitdIdToDelete = req.params.tid;
    // tuits = tuits.filter(usr => usr._id !== tuitId);
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.json(status);
}

export default app => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}