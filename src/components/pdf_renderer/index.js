import "./style.scss";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useState } from "react";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PDFRenderer = ({ pdf }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Create new plugin instance
  const layoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="ioeman-pdf-renderer">
      <Viewer
        fileUrl={`${process.env.PUBLIC_URL}/pdfs/${pdf}`}
        plugins={[layoutPluginInstance]}
      />
    </div>
  );
};

export default PDFRenderer;
