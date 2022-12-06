import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UploadDropzoneComponent } from "./upload-dropzone.component";
import { Uploader } from "uploader";

describe("UploadDropzoneComponent", () => {
  let component: UploadDropzoneComponent;
  let fixture: ComponentFixture<UploadDropzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadDropzoneComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDropzoneComponent);
    component = fixture.componentInstance;
    component.uploader = Uploader({ apiKey: "free" });
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
