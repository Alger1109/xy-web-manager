import Cookies from "js-cookie";
import store from "@/store";

/**
 * 权限
 * @param {*} key
 */
// export function hasPermission (key,) {
//   return window.SITE_CONFIG['permissions'].indexOf(key) !== -1 || false
// }
export function hasPermission(key, createPersion) {
  if (createPersion) {
    return (
      (window.SITE_CONFIG["permissions"].indexOf(key) !== -1 &&
        store.state.user.id === createPersion) ||
      store.state.user.superAdmin ||
      false
    );
  } else {
    return window.SITE_CONFIG["permissions"].indexOf(key) !== -1 || false;
  }
}
/**
 * 获取字典数据列表
 * @param dictType  字典类型
 */
export function getDictDataList(dictType) {
  const type = window.SITE_CONFIG["dictList"].find(
    (element) => element.dictType === dictType
  );
  if (type) {
    return type.dataList;
  } else {
    return [];
  }
}

/**
 * 获取字典名称
 * @param dictType  字典类型
 * @param dictValue  字典值
 */
export function getDictLabel(dictType, dictValue) {
  const type = window.SITE_CONFIG["dictList"].find(
    (element) => element.dictType === dictType
  );
  if (type) {
    const val = type.dataList.find(
      (element) => element.dictValue === dictValue + ""
    );
    if (val) {
      return val.dictLabel;
    } else {
      return dictValue;
    }
  } else {
    return dictValue;
  }
}
export function getDictLabelMul(dictType, dictValue) {
  const type = window.SITE_CONFIG["dictList"].find(
    (element) => element.dictType === dictType
  );
  if (type) {
    const dictName = [];
    dictValue.forEach((dict) => {
      const val = type.dataList.find(
        (element) => element.dictValue === dict + ""
      );
      if (val) {
        dictName.push(val.dictLabel);
      } else {
        dictName.push(dict);
      }
    });
    return dictName.join(",");
  } else {
    return dictValue.join(",");
  }
}

export function getArrayLabel(dictList, dictValue, key) {
  if (dictList.length > 0) {
    const val = dictList.find((element) => element.id === dictValue);
    if (val) {
      return val[key];
    } else {
      return dictValue;
    }
  } else {
    return dictValue;
  }
}
/**
 * 清除登录信息
 */
export function clearLoginInfo() {
  store.commit("resetStore");
  Cookies.remove("token");
  window.SITE_CONFIG["dynamicMenuRoutesHasAdded"] = false;
}

/**
 * 获取uuid
 */
export function getUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    return (c === "x" ? (Math.random() * 16) | 0 : "r&0x3" | "0x8").toString(
      16
    );
  });
}

/**
 * 获取svg图标(id)列表
 */
export function getIconList() {
  var res = [];
  var list = document.querySelectorAll("svg symbol");
  for (var i = 0; i < list.length; i++) {
    res.push(list[i].id);
  }

  return res;
}

/**
 * 树形数据转换
 * @param {*} data
 * @param {*} id
 * @param {*} pid
 */
export function treeDataTranslate(data, id = "id", pid = "pid") {
  var res = [];
  var temp = {};
  for (var i = 0; i < data.length; i++) {
    temp[data[i][id]] = data[i];
  }
  for (var k = 0; k < data.length; k++) {
    if (!temp[data[k][pid]] || data[k][id] === data[k][pid]) {
      res.push(data[k]);
      continue;
    }
    if (!temp[data[k][pid]]["children"]) {
      temp[data[k][pid]]["children"] = [];
    }
    temp[data[k][pid]]["children"].push(data[k]);
    data[k]["_level"] = (temp[data[k][pid]]._level || 0) + 1;
  }
  return res;
}
//数据null时显示为空
export function removeNull(data) {
  const defaultVal = "";
  if (typeof data != "object" || data == null) {
    if (data === null || data == "null") {
      return defaultVal;
    } else {
      return data;
    }
  }
  for (const v in data) {
    if (data[v] == null || data[v] == "null") {
      data[v] == defaultVal;
    }
    if (typeof data[v] == "object") {
      data[v] = removeNull(data[v]);
    }
  }
}
//时间格式
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || time === null) {
    return null;
  }

  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
  let date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (("" + time).length === 10) time = parseInt(time) * 1000;
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    if (key === "a")
      return ["一", "二", "三", "四", "五", "六", "日"][value - 1];
    if (result.length > 0 && value < 10) {
      value = "0" + value;
    }
    return value || 0;
  });
  return time_str;
}
//判断字符是否为空的方法
export function isEmpty(obj) {
  return typeof obj === "undefined" || obj === null || obj === "";
}

//判断字符是否为空的方法
export function emptyReturnString(obj) {
  if (typeof obj === "undefined" || obj === null || obj === "") {
    return "-";
  } else {
    return obj;
  }
}
// 树结构查询
export function findNodeById(list, targetId) {
  for (const node of list) {
    if (node.id === targetId) {
      return node;
    }
    if (node.children) {
      const foundNode = findNodeById(node.children, targetId);
      if (foundNode) {
        return foundNode;
      }
    }
  }

  return null;
}
