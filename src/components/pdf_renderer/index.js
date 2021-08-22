import "./style.scss";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

import { getFilePlugin } from "@react-pdf-viewer/get-file";

import { zoomPlugin } from "@react-pdf-viewer/zoom";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import { useEffect, useState } from "react";

const PDFRenderer = ({ pdf }) => {
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const small = window.innerWidth < 500;
    setSmallScreen(small);
  }, []);

  // Create new plugin instance
  const getFilePluginInstance = getFilePlugin();
  const zoomPluginInstance = zoomPlugin();

  const { Download } = getFilePluginInstance;
  const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

  return (
    <div className="ioeman-pdf-renderer">
      <div
        className="rpv-core__viewer"
        style={{
          border: "1px solid rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div className="d-flex justify-content-between">
          <div></div>
          <div
            style={{
              alignItems: "center",
              backgroundColor: "#eeeeee",
              borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
              display: "flex",
              justifyContent: "center",
              padding: "4px",
            }}
          >
            <ZoomOutButton />
            <ZoomPopover />
            <ZoomInButton />
          </div>
          <Download />
        </div>
        <div
          style={{
            flex: 1,
            overflow: "hidden",
          }}
        >
          <Viewer
            fileUrl={`${process.env.PUBLIC_URL}/pdfs/${pdf}`}
            plugins={[getFilePluginInstance, zoomPluginInstance]}
            defaultScale={smallScreen ? 0.6 : null}
          />
        </div>
      </div>
    </div>
  );
};

export default PDFRenderer;
