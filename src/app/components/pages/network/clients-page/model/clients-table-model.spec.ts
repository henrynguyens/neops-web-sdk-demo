import {ClientsTableModel} from './clients-table-model';
import {NeopsBaseService} from "../../../../../service/neops-api/neops-base-service";

describe('ClientsTableModel', () => {
  let neopsService: NeopsBaseService<any>

  beforeEach(done => {
    neopsService = jasmine.createSpyObj(NeopsBaseService.name, ["searchElements"])
  })

  it('should create an instance', () => {
    expect(new ClientsTableModel(neopsService)).toBeTruthy();
  });
});
