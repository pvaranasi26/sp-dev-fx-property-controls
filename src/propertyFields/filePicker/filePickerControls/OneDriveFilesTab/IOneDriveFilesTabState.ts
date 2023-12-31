import { OneDriveFilesBreadcrumbItem } from "./OneDriveFilesTab.types";
import { IFilePickerResult } from "../FilePicker.types";

export interface IOneDriveFilesTabState {
  filePickerResult: IFilePickerResult;
  libraryAbsolutePath: string;
  libraryTitle: string;
  libraryId: string;
  folderPath: string;
  folderName: string;

  breadcrumbItems: OneDriveFilesBreadcrumbItem[];
}
