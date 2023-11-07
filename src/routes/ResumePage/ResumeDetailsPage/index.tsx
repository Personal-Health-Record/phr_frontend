import { useParams } from "react-router-dom";
import { dummyResumeData } from "../constants";
import Header from "../../HomePage/components/Header";
import CardResumeDetail from "../components/CardResumeDetail";
import BottomNavbarDownloadShare from "../../HomePage/components/BottomNavbarDownloadShare";
import { formatDate } from "../../../helpers/dateHelper";

const ResumeDetail = () => {
  const params = useParams();
  const resume = dummyResumeData.find(
    (resume) => resume.id === parseInt(params.id as string)
  )!;

  const renderImage = () => {
    return (
      <>
        <div
          className="flex-1"
          style={{
            backgroundImage: `url("${resume.checkUpImages[0]}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className="flex-1"
          style={{
            backgroundImage: `url("${resume.checkUpImages[1]}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="flex-1 flex flex-col">
          <div
            className="flex-1"
            style={{
              backgroundImage: `url("${resume.checkUpImages[2]}")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <div
            className="flex-1"
            style={{
              backgroundImage: `url("${resume.checkUpImages[3]}")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </div>
      </>
    );
  };

  return (
    <div className="flex flex-col">
      <Header title="Resume Medis" />
      <div className="flex flex-col w-full px-4 py-4 gap-3 mb-2">
        <h3 className="font-semibold">Informasi Umum</h3>
        <CardResumeDetail
          title={"Tanggal Kunjungan"}
          data={formatDate(resume.date)}
        />
        <CardResumeDetail
          title={"Nomor Rekam Medis"}
          data={resume.recordNumber}
        />
        <CardResumeDetail title={"NIK Pasien"} data={resume.nik} />
        <CardResumeDetail title={"Jenis Pasien"} data={resume.patientType} />
        <CardResumeDetail title={"Nama Pasien"} data={resume.patientName} />
        <CardResumeDetail
          title={"Nama Tenaga Medis"}
          data={resume.doctorName}
        />
        <CardResumeDetail title={"Nama Poli"} data={resume.polyName} />
        <CardResumeDetail
          title={"Nama Fasilitas Kesehatan"}
          data={resume.location}
        />
        <CardResumeDetail title={"Anamnesis"} data={resume.anamnesis} />
        <CardResumeDetail title={"Diagnosis"} data={resume.diagnose} />
        <CardResumeDetail
          title={"Obat yang diberikan"}
          data={resume.medicine}
        />
      </div>
      <div className="flex flex-col w-full px-4 py-4 gap-3 mb-24">
        <h3 className="font-semibold">Hasil Pemeriksaan</h3>
        <div className="flex flex-row h-48">{renderImage()}</div>
      </div>

      <BottomNavbarDownloadShare
        title="Resume Medis"
        body={"Silahkan check resume medis " + resume.recordNumber}
        link={"/resume/details/" + resume.id}
      />
    </div>
  );
};

export default ResumeDetail;
