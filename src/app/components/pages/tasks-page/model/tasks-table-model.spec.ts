import {TasksTableModel} from './tasks-table-model';
import {NeopsBaseService} from "../../../../service/neops-api/neops-base-service";

describe('TasksTableModel', () => {
  let neopsService: NeopsBaseService<any>

  beforeEach(done => {
    neopsService = jasmine.createSpyObj(NeopsBaseService.name, [])
  })
  it('should create an instance', () => {
    expect(new TasksTableModel(neopsService)).toBeTruthy();
  });
});
