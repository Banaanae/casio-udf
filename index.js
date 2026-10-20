const funcs = {
  funcs: [
    {
      title: "trapArea",
      desc: `Finds the area underneath a graph using trapezium approximation
      Calculates signed area, unsigned area and error`,
      ret: "The signed approximated area",
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
          desc: "The start of the area to find"
        },
        {
          name: "upper",
          desc: "The end of the area to find"
        }
      ],
      changelog: [
        {
          version: "1.0.0",
          date: "2026-09-01",
          changes: "Created trapArea"
        },
        {
          version: "1.1.0",
          date: "2026-09-01",
          changes: "Added unsigned and error calculations"
        }
      ]
    },
    {
      title: "unsgnInt",
      desc: "Performs unsigned integration between two bounds",
      ret: "The bounded area",
      remarks: "",
      args: [
        {
          name: "expression",
          desc: "The expression to evaluate"
        },
        {
          name: "lower",
          desc: "The start of the area to find"
        },
        {
          name: "upper",
          desc: "The end of the area to find"
        }
      ],
      changelog: [
        {
          version: "1.0.0",
          date: "2026-09-02",
          changes: "Created unsgnInt"
        },
        {
          version: "1.0.1",
          date: "2026-09-06",
          changes: "Removed debug prints"
        }
      ]
    },
    {
      title: "funcSP",
      desc: `Finds all stationary points in a given domain`,
      ret: "List of coordinates (as string)",
      remarks: "",
      args: [
        {
          name: "expression",
          desc: "The expression to check"
        },
        {
          name: "lower",
          desc: "The start of the domain to check"
        },
        {
          name: "upper",
          desc: "The end of the domain to check"
        }
      ],
      changelog: [
        {
          version: "1.0.0",
          date: "2026-10-07",
          changes: "Created funcSP"
        }
      ]
    },
    {
      title: "normSolv",
      desc: `Solves normal distribution questions in the style of:
      15% of balls weigh less than 5kg, 10% of balls weigh more than 6kg
      Find standard deviation and mean.
      Use normSolv(0.15, 5, 0.1, 6)`,
      ret: "Standard deviation and mean",
      remarks: "",
      args: [
        {
          name: "prob1",
          desc: "The percentage of the data in the lower case"
        },
        {
          name: "bound1",
          desc: "The upper limit of the data in the lower case"
        },
        {
          name: "prob2",
          desc: "The percentage of the data in the upper case"
        },
        {
          name: "bound2",
          desc: "The lower limit of the data in the upper case"
        }
      ],
      changelog: [
        {
          version: "1.0.0",
          date: "2026-10-20",
          changes: "Created normSolv"
        }
      ]
    },
    {
      title: "simulInf",
      desc: `Solves for when a system of
      equations has infinite solutions`,
      ret: "List of solutions for the parameter",
      remarks: `Only works in 1 parameter questions
      Paramater must be k`,
      args: [
        {
          name: "x",
          desc: "The first equation"
        },
        {
          name: "y",
          desc: "The second equation"
        },
      ],
      changelog: [
        {
          version: "1.0.0",
          date: "2026-10-20",
          changes: "Created simulInf"
        }
      ]
    },
    {
      title: "simulNil",
      desc: `Solves for when a system of
      equations has no solutions`,
      ret: "List of solutions for the parameter",
      remarks: `Only works in 1 parameter questions
      Paramater must be k`,
      args: [
        {
          name: "x",
          desc: "The first equation"
        },
        {
          name: "y",
          desc: "The second equation"
        },
      ],
      changelog: [
        {
          version: "1.0.0",
          date: "2026-10-20",
          changes: "Created simulNil"
        }
      ]
    },
    {
      type: "sep",
      title: "Helper functions",
      desc: `If you're making your own functions you may find these helpful
      Otherwise these have no purpose in an exam`
    },
    {
      title: "roots",
      desc: `Finds the roots of an expresion for a given domain
      Essentially solve(f(x)=0) but formatted to remove the x=`,
      ret: "The list of roots",
      remarks: "",
      args: [
        {
          name: "expression",
          desc: "The expression to evaluate"
        },
        {
          name: "lower",
          desc: "The start of the domain to check"
        },
        {
          name: "upper",
          desc: "The end of the domain to check"
        }
      ],
      changelog: [
        {
          version: "1.0.0",
          date: "2026-09-02",
          changes: "Created roots"
        },
        {
          version: "1.0.1",
          date: "2026-09-06",
          changes: "Removed debug prints"
        },
        {
          version: "1.0.2",
          date: "2026-10-20",
          changes: "Reduced file size (helper funcs)"
        }
      ]
    },
    {
      title: "evalExpr",
      desc: `Evaluates an expression at a specific point`,
      ret: "The evaluated expression",
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
    },
    {
      title: "exprCmp",
      desc: `Literally compares two expressions to determine if they are the same`,
      ret: "TRUE/FALSE",
      remarks: "",
      args: [
        {
          name: "x",
          desc: "The first expression"
        },
        {
          name: "y",
          desc: "The second expression"
        }
      ],
      changelog: [
        {
          version: "1.0.0",
          date: "2026-10-20",
          changes: "Created exprCmp"
        }
      ]
    },
    {
      title: "isEqSelf",
      desc: `Determines if the expression is equal to itself
      Eg. k=k`,
      ret: "TRUE/FALSE",
      remarks: "",
      args: [
        {
          name: "expression",
          desc: "The expression to check"
        }
      ],
      changelog: [
        {
          version: "1.0.0",
          date: "2026-10-20",
          changes: "Created isEqSelf"
        }
      ]
    },
    {
      title: "isUndef",
      desc: `Determines if the inputted expression is Undefined`,
      ret: "TRUE/FALSE",
      remarks: "",
      args: [
        {
          name: "expression",
          desc: "The expression to check"
        }
      ],
      changelog: [
        {
          version: "1.0.0",
          date: "2026-09-09",
          changes: "Created isUndef"
        },
        {
          version: "1.0.1",
          date: "2026-10-7",
          changes: "Fixed error if input is string"
        }
      ]
    },
    {
      title: "join",
      desc: `Joins two arbitrary inputs`,
      ret: "STR",
      remarks: `In some rare cases certain strings cause errors
      Workaround: Use StrJoin command`,
      args: [
        {
          name: "first",
          desc: "Source string"
        },
        {
          name: "second",
          desc: "String to append to first"
        }
      ],
      changelog: [
        {
          version: "1.0.0",
          date: "2026-10-07",
          changes: "Created join"
        },
        {
          version: "1.0.1",
          date: "2026-10-20",
          changes: "Reduced file size (helper funcs)"
        }
      ]
    },
    {
      title: "listr",
      desc: `Makes a list of the right side of every expression in a list`,
      ret: "A list of expressions",
      remarks: "",
      args: [
        {
          name: "list",
          desc: "The list to get the right side of"
        }
      ],
      changelog: [
        {
          version: "1.0.0",
          date: "2026-10-20",
          changes: "Created listr"
        }
      ]
    },
    {
      title: "listAnd",
      desc: `Attempts to create the intersection of 2 lists`,
      ret: "The intersected list",
      remarks: `This function only works on = and ≠
      < and > are not supported.`,
      args: [
        {
          name: "x",
          desc: "The first list to intersect"
        },
        {
          name: "y",
          desc: "The second list to intersect"
        }
      ],
      changelog: [
        {
          version: "1.0.0",
          date: "2026-10-20",
          changes: "Created listAnd"
        }
      ]
    },
    {
      title: "toStr",
      desc: `Converts an arbitrary input to a string
      Safer version of ExpToStr`,
      ret: "STR",
      remarks: "",
      args: [
        {
          name: "expression",
          desc: "The expression to convert"
        }
      ],
      changelog: [
        {
          version: "1.0.0",
          date: "2026-10-20",
          changes: "Created toStr"
        }
      ]
    },
    {
      title: "strSplit",
      desc: `Separates a string into a list of substrings using the specified delimiter.`,
      ret: "TRUE/FALSE",
      remarks: "",
      args: [
        {
          name: "string",
          desc: "The string to split"
        },
        {
          name: "delimiter",
          desc: `String to split at
          Use an empty string to split at every character`
        }
      ],
      changelog: [
        {
          version: "1.0.0",
          date: "2026-10-20",
          changes: "Created strSplit"
        }
      ]
    }
  ]
};


function add(func) {
  const wrapper = document.getElementById("funcs");

  if (func.type === "sep") {
    const sep = document.createElement("div");
    sep.className = "function-separator";

    const hr = document.createElement("hr");
    sep.appendChild(hr);

    if (func.title) {
      const title = document.createElement("h2");
      title.className = "function-title";
      title.innerText = func.title;
      sep.appendChild(title);
    }

    if (func.desc) {
      const desc = document.createElement("p");
      desc.className = "function-description";
      desc.innerText = func.desc;
      sep.appendChild(desc);
    }

    wrapper.appendChild(sep);
    return;
  }

  // Main card
  const card = document.createElement("div");
  card.className = "function-card";
  card.id = func.title;

  // Header
  const header = document.createElement("div");
  header.className = "function-header";

  const title = document.createElement("h2");
  title.className = "function-title";
  title.innerText = func.title;

  header.appendChild(title);

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
        if (func.type !== "sep") {
          const filename = `${func.title}-(Program).xcp`;
          const response = await fetch(`./bin/${filename}`);

          if (!response.ok) {
            throw new Error(`Failed to download ${filename}`);
          }

          const data = await response.blob();
          zip.file(filename, data);
        }
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