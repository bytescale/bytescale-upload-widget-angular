import { ComponentFixture, TestBed } from "@angular/core/testing";
import { UploadDropzoneComponent } from "./upload-dropzone.component";

describe("BytescaleUploadWidgetAngularComponent", () => {
  let component: UploadDropzoneComponent;
  let fixture: ComponentFixture<UploadDropzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadDropzoneComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadDropzoneComponent);
    component = fixture.componentInstance;
    component.options = { apiKey: "free" };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
