const createPath = (name: string, path: string) : string => {
    let clean_name = name.replace(/ /g, "-").replace(/\^!@#\$%\*\/\+=.,;/g, "");
    let complete_path = `${path}/${clean_name}`;
    return complete_path
}

export default createPath;