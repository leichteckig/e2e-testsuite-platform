const AdminFixtureService = require('../fixture.service.js');
class CmsFixtureService extends AdminFixtureService {
    setCmsPageFixture(userData) {
        return this.apiClient.post('/v1/cms-page?_response=true', userData);
    }
}

module.exports = CmsFixtureService;
global.CmsFixtureService = new CmsFixtureService();
