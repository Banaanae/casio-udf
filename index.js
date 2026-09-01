const funcs = {
  funcs: [
    {
      title: "trapArea",
      desc: `Finds the area underneath a graph using trapezium approximation
      Calculates signed area, unsigned area and error`,
      ret: "The signed approximated area",
      requires: ["evalExpr"],
      remarks: "",
      args: [
        {
          name: "expression",
          desc: "The expression to evaluate"
        },
        {
          name: "n",
          desc: "Number of trapeziums"
        },
        {
          name: "lower",
          desc: "The start of the area to check"
        },
        {
          name: "upper",
          desc: "The end of the area to check"
        }
      ],
      changelog: [
        {
          version: "1.1.0",
          date: "2026-09-01",
          changes: "Added unsigned and error calculations"
        },
        {
          version: "1.0.0",
          date: "2026-09-01",
          changes: "Created trapArea"
        }
      ]
    },
    {
      title: "evalExpr",
      desc: `Evaluates an expression
      Note: This is a helper function; not useful in your exams`,
      ret: "The evaluated expression",
      requires: [],
      remarks: "The contents of variable x are always cleared",
      args: [
        {
          name: "expression",
          desc: "The expression to evaluate"
        },
        {
          name: "val",
          desc: "The value to substitute into x"
        }
      ],
      changelog: [
        {
          version: "1.0.0",
          date: "2026-09-01",
          changes: "Created evalExpr"
        }
      ]
    }
  ]
};


function add(func) {
  const wrapper = document.getElementById("funcs");

  // Main card
  const card = document.createElement("div");
  card.className = "function-card";

  // Header
  const header = document.createElement("div");
  header.className = "function-header";

  const title = document.createElement("h2");
  title.className = "function-title";
  title.innerText = func.title;

  const download = document.createElement("a");
  download.className = "download-button";
  download.href = `/bin/${func.title}-(Program).xcp`;
  download.download = "";
  download.innerText = "Download";

  header.appendChild(title);
  header.appendChild(download);

  // Description
  const sub = document.createElement("p");
  sub.className = "function-description";
  sub.innerText = func.desc;

  // Return value
  const returnSection = document.createElement("div");
  returnSection.className = "function-return";

  const returnLabel = document.createElement("span");
  returnLabel.className = "section-label";
  returnLabel.innerText = "Returns";

  const returnValue = document.createElement("span");
  returnValue.innerText = func.ret;

  returnSection.appendChild(returnLabel);
  returnSection.appendChild(returnValue);

  // Arguments
  const argsSection = document.createElement("div");
  argsSection.className = "function-args";

  const argsTitle = document.createElement("h3");
  argsTitle.innerText = "Arguments";

  argsSection.appendChild(argsTitle);

  func.args.forEach(arg => {
    const argRow = document.createElement("div");
    argRow.className = "argument";

    const argName = document.createElement("code");
    argName.innerText = arg.name;

    const argDesc = document.createElement("span");
    argDesc.innerText = arg.desc;

    argRow.appendChild(argName);
    argRow.appendChild(argDesc);

    argsSection.appendChild(argRow);
  });

  // Requires
  let requiresSection;
  if (func.requires && func.requires.length > 0) {
    requiresSection = document.createElement("div");
    requiresSection.className = "function-requires";

    const requiresTitle = document.createElement("h3");
    requiresTitle.innerText = "Requires";

    requiresSection.appendChild(requiresTitle);

    const requiresList = document.createElement("div");
    requiresList.className = "requires-list";

    func.requires.forEach(requirement => {
      const link = document.createElement("a");

      link.className = "require-link";
      link.href = `#${requirement}`;
      link.innerText = requirement;

      requiresList.appendChild(link);
    });

    requiresSection.appendChild(requiresList);
    card.appendChild(requiresSection);
  }

  // Remarks
  let remarks;
  if (func.remarks && func.remarks.trim() !== "") {
    remarks = document.createElement("div");
    remarks.className = "function-remarks";

    const remarksLabel = document.createElement("span");
    remarksLabel.className = "section-label";
    remarksLabel.innerText = "Remarks";

    const remarksText = document.createElement("p");
    remarksText.innerText = func.remarks;

    remarks.appendChild(remarksLabel);
    remarks.appendChild(remarksText);
  }

  // Changelog
  let changelog;
  if (func.changelog && func.changelog.length > 0) {
    changelog = document.createElement("details");
    changelog.className = "function-changelog";

    const summary = document.createElement("summary");
    summary.innerText = "Changelog";

    changelog.appendChild(summary);

    const changelogList = document.createElement("div");
    changelogList.className = "changelog-list";

    func.changelog.forEach(entry => {
      const item = document.createElement("div");
      item.className = "changelog-entry";

      const changelogHeader = document.createElement("div");
      changelogHeader.className = "changelog-header";

      const version = document.createElement("code");
      version.innerText = entry.version;

      const date = document.createElement("span");
      date.innerText = entry.date;

      changelogHeader.appendChild(version);
      changelogHeader.appendChild(date);

      const changes = document.createElement("p");
      changes.innerText = entry.changes;

      item.appendChild(changelogHeader);
      item.appendChild(changes);

      changelogList.appendChild(item);
    });

    changelog.appendChild(changelogList);
  }

  // Assemble
  card.appendChild(header);
  card.appendChild(sub);
  card.appendChild(returnSection);
  card.appendChild(argsSection);
  if (remarks != undefined)
    card.appendChild(remarks);
  if (requiresSection != undefined)
    card.appendChild(requiresSection);
  if (changelog != undefined)
    card.appendChild(changelog);

  wrapper.appendChild(card);
}


funcs.funcs.forEach(add);

document.getElementById("download-all").addEventListener("click", async () => {
  const button = document.getElementById("download-all");

  try {
    button.disabled = true;
    button.innerText = "Preparing download...";

    const zip = new JSZip();

    await Promise.all(
      funcs.funcs.map(async func => {
        const filename = `${func.title}-(Program).xcp`;
        const response = await fetch(`/bin/${filename}`);

        if (!response.ok) {
          throw new Error(`Failed to download ${filename}`);
        }

        const data = await response.blob();
        zip.file(filename, data);
      })
    );

    button.innerText = "Creating ZIP...";

    const blob = await zip.generateAsync({
      type: "blob",
      compression: "DEFLATE",
      compressionOptions: {
        level: 6
      }
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Casio-UDFs.zip";
    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);

  } catch (error) {
    console.error("Failed to create UDF archive:", error);
    alert("Failed to create the ZIP archive.");
  } finally {
    button.disabled = false;
    button.innerText = "↓ Download All";
  }
});