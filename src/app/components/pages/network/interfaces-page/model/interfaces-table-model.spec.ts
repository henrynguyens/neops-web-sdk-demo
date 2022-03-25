import {InterfacesTableModel} from './interfaces-table-model';
import {NeopsBaseService} from "../../../../../service/neops-api/neops-base-service";

describe('InterfacesTableModel', () => {
  let neopsService: NeopsBaseService<any>

  beforeEach(done => {
    neopsService = jasmine.createSpyObj(NeopsBaseService.name, [])
  })

  it('should create an instance', () => {
    expect(new InterfacesTableModel(neopsService)).toBeTruthy();
  });
});
