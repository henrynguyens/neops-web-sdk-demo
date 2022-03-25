import {GroupsTableModel} from './groups-table-model';
import {NeopsBaseService} from "../../../../../service/neops-api/neops-base-service";

describe('GroupsTableModel', () => {
  let neopsService: NeopsBaseService<any>

  beforeEach(done => {
    neopsService = jasmine.createSpyObj(NeopsBaseService.name, [""])
  })
  it('should create an instance', () => {
    expect(new GroupsTableModel(neopsService)).toBeTruthy();
  });
});
