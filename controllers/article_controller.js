const { Article, Inovation } = require('../models');

// Controller to create new Article
const createArticle = async (req, res) => {
    try {
        const { inovation_id, description } = req.body;
        const article_image = req.file.path;
        const inovation = await Inovation.findByPk(inovation_id);
        if (!inovation) {
            return res.status(404).json({
                code: 404,
                message: 'Inovation not found',
                data: null
            });
        }
        if (inovation.user_id !== req.user.userId) {
            return res.status(401).json({
                code: 401,
                message: 'Inovation not yours',
                data: null
            });
        }
        const newArticle = await Article.create({
            inovation_id,
            description,
            flag_active : true,
            article_image
        });
        return res.status(201).json({
            code: 201,
            message: 'Article created successfully',
            data: newArticle
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            message: 'Internal server error',
            data: null
        });
    }
};

// Controller to get Article by Inovation ID
const getArticleByInovationId = async (req, res) => {
    try {
        let articles;
        const { inovation_id } = req.query;

        if (inovation_id) {
            articles = await Article.findAll({ where: { inovation_id: inovation_id, flag_active: true } });
        }
        return res.status(200).json({
            code: 200,
            message: 'Get Articles Success',
            data: articles
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            message: 'Internal server error',
            data: null
        });
    }
};

// Controller to update Articles
const updateArticle = async (req, res) => {
    try {
        const { inovation_id, description } = req.body;
        const article_image = req.file.path;
        const inovation = await Inovation.findByPk(inovation_id);
        if (!inovation) {
            return res.status(404).json({
                code: 404,
                message: 'Inovation not found',
                data: null
            });
        }
        if (inovation.user_id != req.user.userId) {
            return res.status(401).json({
                code: 401,
                message: 'Inovation not yours',
                data: null
            });
        }
        const article = await Article.findByPk(req.params.id);
        if (!article) {
            return res.status(404).json({
                code: 404,
                message: 'Article not found',
                data: null
            });
        }
        await article.update({
            inovation_id,
            description,
            article_image
        });
        return res.json({
            code: 200,
            message: 'Article updated successfully',
            data: article
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            message: 'Internal server error',
            data: null
        });
    }
};

// Controller to delete Article
const deleteArticle = async (req, res) => {
    try {
        const article = await Article.findByPk(req.params.id);
        const inovation = await Inovation.findByPk(req.params.inovation_id);
        if (!inovation) {
            return res.status(404).json({
                code: 404,
                message: 'Inovation not found',
                data: null
            });
        }
        if (inovation.user_id != req.user.userId) {
            return res.status(401).json({
                code: 401,
                message: 'Inovation not yours',
                data: null
            });
        }
        if (!article) {
            return res.status(404).json({
                code: 404,
                message: 'Article not found',
                data: null
            });
        }
        await article.update({
            flag_active: false
        });
        return res.json({
            code: 200,
            message: 'Article deleted successfully',
            data: null
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            message: 'Internal server error',
            data: null
        });
    }
};

module.exports = {
    createArticle,
    getArticleByInovationId,
    updateArticle,
    deleteArticle
};
