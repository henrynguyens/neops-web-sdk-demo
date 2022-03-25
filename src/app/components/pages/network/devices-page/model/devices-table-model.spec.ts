import {DevicesTableModel} from './devices-table-model';
import {NeopsBaseService} from "../../../../../service/neops-api/neops-base-service";

describe('DevicesTableModel', () => {
  let neopsService: NeopsBaseService<any>

  beforeEach(done => {
    neopsService = jasmine.createSpyObj(NeopsBaseService.name, [])
  })

  it('should create an instance', () => {
    expect(new DevicesTableModel(neopsService)).toBeTruthy();
  });
});
