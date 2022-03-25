import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {
  DefaultNeopsTableConfiguration,
  NeopsTableConfiguration
} from "../../generic-table/model/neops-table-configuration";
import {NeopsTaskService} from "../../../service/neops-api/neops-task.service";
import {TasksTableModel} from "./model/tasks-table-model";

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent implements OnInit, AfterViewInit {
  neopsTableConfiguration: NeopsTableConfiguration;
  neopsTableModel: TasksTableModel;

  @ViewChild("rowExpandTemplate", { static: false })
  protected rowExpandTemplate?: TemplateRef<any>

  constructor(private taskService: NeopsTaskService) {
    this.neopsTableModel = new TasksTableModel(this.taskService)

    this.neopsTableConfiguration = new DefaultNeopsTableConfiguration()
    this.neopsTableConfiguration.title = "Tasks Table"
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.neopsTableModel.rowExpandTemplate = this.rowExpandTemplate
  }



}
