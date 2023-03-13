export default function handler(req, res) {
    return res.status(200).json({
        name: "initial",
        version: "0.1.0",
        author: "Gustavo Ordoño Poma"
    });
}
