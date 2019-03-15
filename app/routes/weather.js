import { inject as service } from "@ember/service";
import Route from '@ember/routing/route';

export default Route.extend({
  ajax: service(),

  async model() {
    let response = await this.ajax.request('http://api.aerisapi.com/observations/70816?client_id=AMPdX2M3lA8yrTcPuW78c&client_secret=bvfG6TyVlv7odrhIcgWMbiVdC0UPU9orVEZiGJLW', {
    });
    return response.response;
  }
});