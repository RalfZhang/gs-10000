import { readFile, appendFile } from 'node:fs';

const m = `#EXTINF:-1 group-title="{groupTitle}",CCTV1
/rtp/239.255.30.101:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV2
/rtp/239.255.30.179:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV3
/rtp/239.255.29.12:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV4
/rtp/239.255.30.83:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV5
/rtp/239.255.29.13:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV5+
/rtp/239.255.30.184:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV6
/rtp/239.255.29.14:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV7
/rtp/239.255.30.178:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV8
/rtp/239.255.29.15:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV9
/rtp/239.255.30.180:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV10
/rtp/239.255.30.181:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV12
/rtp/239.255.30.182:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV13
/rtp/239.255.29.28:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV14
/rtp/239.255.30.183:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV15
/rtp/239.255.30.68:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV16
/rtp/239.255.30.88:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV17
/rtp/239.255.30.96:8231
#EXTINF:-1 group-title="{groupTitle}",云南卫视
/rtp/239.255.29.2:8231
#EXTINF:-1 group-title="{groupTitle}",河南卫视
/rtp/239.255.29.3:8231
#EXTINF:-1 group-title="{groupTitle}",广西卫视
/rtp/239.255.29.4:8231
#EXTINF:-1 group-title="{groupTitle}",吉林卫视
/rtp/239.255.29.5:8231
#EXTINF:-1 group-title="{groupTitle}",天津卫视
/rtp/239.255.30.67:8231
#EXTINF:-1 group-title="{groupTitle}",辽宁卫视
/rtp/239.255.30.69:8231
#EXTINF:-1 group-title="{groupTitle}",江西卫视
/rtp/239.255.30.71:8231
#EXTINF:-1 group-title="{groupTitle}",安徽卫视
/rtp/239.255.30.84:8231
#EXTINF:-1 group-title="{groupTitle}",河北卫视
/rtp/239.255.30.85:8231
#EXTINF:-1 group-title="{groupTitle}",东南卫视
/rtp/239.255.30.86:8231
#EXTINF:-1 group-title="{groupTitle}",重庆卫视
/rtp/239.255.30.89:8231
#EXTINF:-1 group-title="{groupTitle}",四川卫视
/rtp/239.255.30.91:8231
#EXTINF:-1 group-title="{groupTitle}",贵州卫视
/rtp/239.255.30.98:8231
#EXTINF:-1 group-title="{groupTitle}",海南卫视
/rtp/239.255.30.99:8231
#EXTINF:-1 group-title="{groupTitle}",东方卫视
/rtp/239.255.30.130:8231
#EXTINF:-1 group-title="{groupTitle}",江苏卫视
/rtp/239.255.30.131:8231
#EXTINF:-1 group-title="{groupTitle}",浙江卫视
/rtp/239.255.30.132:8231
#EXTINF:-1 group-title="{groupTitle}",北京卫视
/rtp/239.255.30.133:8231
#EXTINF:-1 group-title="{groupTitle}",广东卫视
/rtp/239.255.30.134:8231
#EXTINF:-1 group-title="{groupTitle}",深圳卫视
/rtp/239.255.30.135:8231
#EXTINF:-1 group-title="{groupTitle}",湖南卫视
/rtp/239.255.30.136:8231
#EXTINF:-1 group-title="{groupTitle}",黑龙江卫视
/rtp/239.255.30.137:8231
#EXTINF:-1 group-title="{groupTitle}",湖北卫视
/rtp/239.255.30.138:8231
#EXTINF:-1 group-title="{groupTitle}",山东卫视
/rtp/239.255.30.139:8231
#EXTINF:-1 group-title="{groupTitle}",凤凰中文
/rtp/239.255.30.50:8231
#EXTINF:-1 group-title="{groupTitle}",凤凰资讯
/rtp/239.255.30.70:8231
#EXTINF:-1 group-title="{groupTitle}",凤凰香港
/rtp/239.255.30.123:8231
#EXTINF:-1 group-title="{groupTitle}",CETV1
/rtp/239.255.30.90:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV1
/rtp/239.255.29.40:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV1
/rtp/239.255.30.1:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV2
/rtp/239.255.30.2:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV4
/rtp/239.255.30.3:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV7
/rtp/239.255.30.4:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV9
/rtp/239.255.30.74:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV10
/rtp/239.255.30.10:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV11
/rtp/239.255.30.7:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV12
/rtp/239.255.30.8:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV13
/rtp/239.255.30.9:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV11
/rtp/239.255.30.62:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV3
/rtp/239.255.30.185:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV5
/rtp/239.255.30.186:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV5
/rtp/239.255.30.199:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV6
/rtp/239.255.30.187:8231
#EXTINF:-1 group-title="{groupTitle}",CCTV8
/rtp/239.255.30.188:8231
#EXTINF:-1 group-title="{groupTitle}",欢笑剧场
/rtp/239.255.29.7:8231
#EXTINF:-1 group-title="{groupTitle}",动漫秀场
/rtp/239.255.29.16:8231
#EXTINF:-1 group-title="{groupTitle}",生活时尚
/rtp/239.255.29.18:8231
#EXTINF:-1 group-title="{groupTitle}",欢笑剧场
/rtp/239.255.29.19:8231
#EXTINF:-1 group-title="{groupTitle}",都市
/rtp/239.255.29.22:8231
#EXTINF:-1 group-title="{groupTitle}",金色学堂
/rtp/239.255.29.23:8231
#EXTINF:-1 group-title="{groupTitle}",法治天地
/rtp/239.255.29.24:8231
#EXTINF:-1 group-title="{groupTitle}",快乐垂钓
/rtp/239.255.29.26:8231
#EXTINF:-1 group-title="{groupTitle}",体育
/rtp/239.255.29.31:8231
#EXTINF:-1 group-title="{groupTitle}",哈哈炫动
/rtp/239.255.29.37:8231
#EXTINF:-1 group-title="{groupTitle}",卡酷少儿
/rtp/239.255.29.38:8231
#EXTINF:-1 group-title="{groupTitle}",金鹰纪实
/rtp/239.255.29.39:8231
#EXTINF:-1 group-title="{groupTitle}",都市剧场
/rtp/239.255.29.41:8231
#EXTINF:-1 group-title="{groupTitle}",东方财经
/rtp/239.255.29.43:8231
#EXTINF:-1 group-title="{groupTitle}",茶频道
/rtp/239.255.29.44:8231
#EXTINF:-1 group-title="{groupTitle}",五星体育
/rtp/239.255.29.45:8231
#EXTINF:-1 group-title="{groupTitle}",三沙卫视
/rtp/239.255.29.46:8231
#EXTINF:-1 group-title="{groupTitle}",陇上生活
/rtp/239.255.30.73:8231
#EXTINF:-1 group-title="{groupTitle}",新闻
/rtp/239.255.30.93:8231
#EXTINF:-1 group-title="{groupTitle}",Bestv
/rtp/239.255.30.100:8231
#EXTINF:-1 group-title="{groupTitle}",临夏经济
/rtp/239.255.30.106:8231
#EXTINF:-1 group-title="{groupTitle}",临夏新闻
/rtp/239.255.30.107:8231
#EXTINF:-1 group-title="{groupTitle}",临夏文旅
/rtp/239.255.30.108:8231
#EXTINF:-1 group-title="{groupTitle}",体育
/rtp/239.255.30.115:8231
#EXTINF:-1 group-title="{groupTitle}",4K
/rtp/239.255.30.116:8231
#EXTINF:-1 group-title="{groupTitle}",Bestv
/rtp/239.255.30.118:8231
#EXTINF:-1 group-title="{groupTitle}",体育
/rtp/239.255.30.128:8231
#EXTINF:-1 group-title="{groupTitle}",Bestv
/rtp/239.255.30.150:8231
#EXTINF:-1 group-title="{groupTitle}",Bestv
/rtp/239.255.30.151:8231
#EXTINF:-1 group-title="{groupTitle}",Bestv
/rtp/239.255.30.160:8231
#EXTINF:-1 group-title="{groupTitle}",Bestv
/rtp/239.255.30.166:8231
#EXTINF:-1 group-title="{groupTitle}",Bestv
/rtp/239.255.30.167:8231
#EXTINF:-1 group-title="{groupTitle}",Bestv
/rtp/239.255.30.168:8231
#EXTINF:-1 group-title="{groupTitle}",YZTV
/rtp/239.255.30.175:8231
#EXTINF:-1 group-title="{groupTitle}",纪实人文
/rtp/239.255.30.176:8231
#EXTINF:-1 group-title="{groupTitle}",Bestv
/rtp/239.255.30.193:8231
#EXTINF:-1 group-title="{groupTitle}",Bestv
/rtp/239.255.30.194:8231
#EXTINF:-1 group-title="{groupTitle}",Bestv
/rtp/239.255.30.196:8231
#EXTINF:-1 group-title="{groupTitle}",Bestv
/rtp/239.255.30.197:8231
#EXTINF:-1 group-title="{groupTitle}",Bestv
/rtp/239.255.30.198:8231
#EXTINF:-1 group-title="{groupTitle}",Bestv
/rtp/239.255.30.217:8231
#EXTINF:-1 group-title="{groupTitle}",Bestv
/rtp/239.255.30.236:8231
#EXTINF:-1 group-title="{groupTitle}",Bestv
/rtp/239.255.30.249:8231
#EXTINF:-1 group-title="{groupTitle}",甘肃影视
/rtp/239.255.30.250:8231
#EXTINF:-1 group-title="{groupTitle}",甘肃公共
/rtp/239.255.30.251:8231
#EXTINF:-1 group-title="{groupTitle}",甘肃都市
/rtp/239.255.30.252:8231
#EXTINF:-1 group-title="{groupTitle}",甘肃经济
/rtp/239.255.30.253:8231
#EXTINF:-1 group-title="{groupTitle}",甘肃少儿
/rtp/239.255.30.254:8231
#EXTINF:-1 group-title="{groupTitle}",6号[768*576]
/rtp/239.255.29.6:8231
#EXTINF:-1 group-title="{groupTitle}",17号
/rtp/239.255.29.17:8231
#EXTINF:-1 group-title="{groupTitle}",20号
/rtp/239.255.29.20:8231
#EXTINF:-1 group-title="{groupTitle}",27号[768*576]
/rtp/239.255.29.27:8231
#EXTINF:-1 group-title="{groupTitle}",42号
/rtp/239.255.29.42:8231
#EXTINF:-1 group-title="{groupTitle}",56号
/rtp/239.255.29.56:8231
#EXTINF:-1 group-title="{groupTitle}",58号
/rtp/239.255.29.58:8231
#EXTINF:-1 group-title="{groupTitle}",59号
/rtp/239.255.29.59:8231
#EXTINF:-1 group-title="{groupTitle}",60号
/rtp/239.255.29.60:8231
#EXTINF:-1 group-title="{groupTitle}",61号
/rtp/239.255.29.61:8231
#EXTINF:-1 group-title="{groupTitle}",62号
/rtp/239.255.29.62:8231
#EXTINF:-1 group-title="{groupTitle}",63号
/rtp/239.255.29.63:8231
#EXTINF:-1 group-title="{groupTitle}",64号
/rtp/239.255.29.64:8231
#EXTINF:-1 group-title="{groupTitle}",4K
/rtp/239.255.29.65:8231
#EXTINF:-1 group-title="{groupTitle}",4K
/rtp/239.255.29.66:8231
#EXTINF:-1 group-title="{groupTitle}",5号[768*576]
/rtp/239.255.30.5:8231
#EXTINF:-1 group-title="{groupTitle}",6号[768*576]
/rtp/239.255.30.6:8231
#EXTINF:-1 group-title="{groupTitle}",11号[768*576]
/rtp/239.255.30.11:8231
#EXTINF:-1 group-title="{groupTitle}",12号[785*576]
/rtp/239.255.30.12:8231
#EXTINF:-1 group-title="{groupTitle}",13号[768*576]
/rtp/239.255.30.13:8231
#EXTINF:-1 group-title="{groupTitle}",14号[768*576]
/rtp/239.255.30.14:8231
#EXTINF:-1 group-title="{groupTitle}",15号[768*576]
/rtp/239.255.30.15:8231
#EXTINF:-1 group-title="{groupTitle}",16号[768*576]
/rtp/239.255.30.16:8231
#EXTINF:-1 group-title="{groupTitle}",17号[768*576]
/rtp/239.255.30.17:8231
#EXTINF:-1 group-title="{groupTitle}",18号[768*576]
/rtp/239.255.30.18:8231
#EXTINF:-1 group-title="{groupTitle}",19号[768*576]
/rtp/239.255.30.19:8231
#EXTINF:-1 group-title="{groupTitle}",20号[768*576]
/rtp/239.255.30.20:8231
#EXTINF:-1 group-title="{groupTitle}",21号[768*576]
/rtp/239.255.30.21:8231
#EXTINF:-1 group-title="{groupTitle}",22号[768*576]
/rtp/239.255.30.22:8231
#EXTINF:-1 group-title="{groupTitle}",23号[768*576]
/rtp/239.255.30.23:8231
#EXTINF:-1 group-title="{groupTitle}",24号[768*576]
/rtp/239.255.30.24:8231
#EXTINF:-1 group-title="{groupTitle}",25号[768*576]
/rtp/239.255.30.25:8231
#EXTINF:-1 group-title="{groupTitle}",26号[768*576]
/rtp/239.255.30.26:8231
#EXTINF:-1 group-title="{groupTitle}",27号[768*576]
/rtp/239.255.30.27:8231
#EXTINF:-1 group-title="{groupTitle}",28号[768*576]
/rtp/239.255.30.28:8231
#EXTINF:-1 group-title="{groupTitle}",29号[768*576]
/rtp/239.255.30.29:8231
#EXTINF:-1 group-title="{groupTitle}",30号[768*576]
/rtp/239.255.30.30:8231
#EXTINF:-1 group-title="{groupTitle}",31号[768*576]
/rtp/239.255.30.31:8231
#EXTINF:-1 group-title="{groupTitle}",32号[768*576]
/rtp/239.255.30.32:8231
#EXTINF:-1 group-title="{groupTitle}",33号[768*576]
/rtp/239.255.30.33:8231
#EXTINF:-1 group-title="{groupTitle}",34号[768*576]
/rtp/239.255.30.34:8231
#EXTINF:-1 group-title="{groupTitle}",35号[768*576]
/rtp/239.255.30.35:8231
#EXTINF:-1 group-title="{groupTitle}",36号[768*576]
/rtp/239.255.30.36:8231
#EXTINF:-1 group-title="{groupTitle}",37号[1047*576]
/rtp/239.255.30.37:8231
#EXTINF:-1 group-title="{groupTitle}",38号[768*576]
/rtp/239.255.30.38:8231
#EXTINF:-1 group-title="{groupTitle}",39号[768*576]
/rtp/239.255.30.39:8231
#EXTINF:-1 group-title="{groupTitle}",40号[768*576]
/rtp/239.255.30.40:8231
#EXTINF:-1 group-title="{groupTitle}",41号[768*576]
/rtp/239.255.30.41:8231
#EXTINF:-1 group-title="{groupTitle}",42号[768*576]
/rtp/239.255.30.42:8231
#EXTINF:-1 group-title="{groupTitle}",43号[768*576]
/rtp/239.255.30.43:8231
#EXTINF:-1 group-title="{groupTitle}",44号[768*576]
/rtp/239.255.30.44:8231
#EXTINF:-1 group-title="{groupTitle}",45号[768*576]
/rtp/239.255.30.45:8231
#EXTINF:-1 group-title="{groupTitle}",46号[768*576]
/rtp/239.255.30.46:8231
#EXTINF:-1 group-title="{groupTitle}",47号[1280*576]
/rtp/239.255.30.47:8231
#EXTINF:-1 group-title="{groupTitle}",48号[768*576]
/rtp/239.255.30.48:8231
#EXTINF:-1 group-title="{groupTitle}",49号[785*576]
/rtp/239.255.30.49:8231
#EXTINF:-1 group-title="{groupTitle}",53号[768*576]
/rtp/239.255.30.53:8231
#EXTINF:-1 group-title="{groupTitle}",54号[785*576]
/rtp/239.255.30.54:8231
#EXTINF:-1 group-title="{groupTitle}",55号[785*576]
/rtp/239.255.30.55:8231
#EXTINF:-1 group-title="{groupTitle}",56号[785*576]
/rtp/239.255.30.56:8231
#EXTINF:-1 group-title="{groupTitle}",60号[785*576]
/rtp/239.255.30.60:8231
#EXTINF:-1 group-title="{groupTitle}",61号[785*576]
/rtp/239.255.30.61:8231
#EXTINF:-1 group-title="{groupTitle}",64号[785*576]
/rtp/239.255.30.64:8231
#EXTINF:-1 group-title="{groupTitle}",65号[768*576]
/rtp/239.255.30.65:8231
#EXTINF:-1 group-title="{groupTitle}",66号[720*576]
/rtp/239.255.30.66:8231
#EXTINF:-1 group-title="{groupTitle}",75号[768*576]
/rtp/239.255.30.75:8231
#EXTINF:-1 group-title="{groupTitle}",4K
/rtp/239.255.30.76:8231
#EXTINF:-1 group-title="{groupTitle}",77号[768*576]
/rtp/239.255.30.77:8231
#EXTINF:-1 group-title="{groupTitle}",79号[785*576]
/rtp/239.255.30.79:8231
#EXTINF:-1 group-title="{groupTitle}",80号
/rtp/239.255.30.80:8231
#EXTINF:-1 group-title="{groupTitle}",95号[768*576]
/rtp/239.255.30.95:8231
#EXTINF:-1 group-title="{groupTitle}",102号[768*576]
/rtp/239.255.30.102:8231
#EXTINF:-1 group-title="{groupTitle}",110号[785*576]
/rtp/239.255.30.110:8231
#EXTINF:-1 group-title="{groupTitle}",111号[785*576]
/rtp/239.255.30.111:8231
#EXTINF:-1 group-title="{groupTitle}",112号[785*576]
/rtp/239.255.30.112:8231
#EXTINF:-1 group-title="{groupTitle}",113号[785*576]
/rtp/239.255.30.113:8231
#EXTINF:-1 group-title="{groupTitle}",114号[785*576]
/rtp/239.255.30.114:8231
#EXTINF:-1 group-title="{groupTitle}",126号[768*576]
/rtp/239.255.30.126:8231
#EXTINF:-1 group-title="{groupTitle}",127号[768*576]
/rtp/239.255.30.127:8231
#EXTINF:-1 group-title="{groupTitle}",129号[1047*576]
/rtp/239.255.30.129:8231
#EXTINF:-1 group-title="{groupTitle}",145号[785*576]
/rtp/239.255.30.145:8231
#EXTINF:-1 group-title="{groupTitle}",146号[785*576]
/rtp/239.255.30.146:8231
#EXTINF:-1 group-title="{groupTitle}",147号
/rtp/239.255.30.147:8231
#EXTINF:-1 group-title="{groupTitle}",148号[785*576]
/rtp/239.255.30.148:8231
#EXTINF:-1 group-title="{groupTitle}",152号[1024*576]
/rtp/239.255.30.152:8231
#EXTINF:-1 group-title="{groupTitle}",153号[1024*576]
/rtp/239.255.30.153:8231
#EXTINF:-1 group-title="{groupTitle}",154号[1024*576]
/rtp/239.255.30.154:8231
#EXTINF:-1 group-title="{groupTitle}",155号[1024*576]
/rtp/239.255.30.155:8231
#EXTINF:-1 group-title="{groupTitle}",156号[1024*576]
/rtp/239.255.30.156:8231
#EXTINF:-1 group-title="{groupTitle}",157号[1024*576]
/rtp/239.255.30.157:8231
#EXTINF:-1 group-title="{groupTitle}",158号[1024*576]
/rtp/239.255.30.158:8231
#EXTINF:-1 group-title="{groupTitle}",169号
/rtp/239.255.30.169:8231
#EXTINF:-1 group-title="{groupTitle}",170号
/rtp/239.255.30.170:8231
#EXTINF:-1 group-title="{groupTitle}",171号
/rtp/239.255.30.171:8231
#EXTINF:-1 group-title="{groupTitle}",172号
/rtp/239.255.30.172:8231
#EXTINF:-1 group-title="{groupTitle}",173号
/rtp/239.255.30.173:8231
#EXTINF:-1 group-title="{groupTitle}",177号[785*576]
/rtp/239.255.30.177:8231
#EXTINF:-1 group-title="{groupTitle}",200号
/rtp/239.255.30.200:8231
#EXTINF:-1 group-title="{groupTitle}",201号
/rtp/239.255.30.201:8231
#EXTINF:-1 group-title="{groupTitle}",202号[1024*576]
/rtp/239.255.30.202:8231
#EXTINF:-1 group-title="{groupTitle}",203号[1024*576]
/rtp/239.255.30.203:8231
#EXTINF:-1 group-title="{groupTitle}",204号[1024*576]
/rtp/239.255.30.204:8231
#EXTINF:-1 group-title="{groupTitle}",205号[1024*576]
/rtp/239.255.30.205:8231
#EXTINF:-1 group-title="{groupTitle}",239号[785*576]
/rtp/239.255.30.239:8231
#EXTINF:-1 group-title="{groupTitle}",240号[768*576]
/rtp/239.255.30.240:8231
#EXTINF:-1 group-title="{groupTitle}",241号[768*576]
/rtp/239.255.30.241:8231
#EXTINF:-1 group-title="{groupTitle}",242号[785*576]
/rtp/239.255.30.242:8231
#EXTINF:-1 group-title="{groupTitle}",243号[768*576]
/rtp/239.255.30.243:8231
#EXTINF:-1 group-title="{groupTitle}",244号[768*576]
/rtp/239.255.30.244:8231
#EXTINF:-1 group-title="{groupTitle}",245号[768*576]
/rtp/239.255.30.245:8231
#EXTINF:-1 group-title="{groupTitle}",246号[768*576]
/rtp/239.255.30.246:8231
#EXTINF:-1 group-title="{groupTitle}",247号[768*576]
/rtp/239.255.30.247:8231
#EXTINF:-1 group-title="{groupTitle}",248号[768*576]
/rtp/239.255.30.248:8231`;


const generateContent = (url) => {
  const title = url.match(/\.(\d+:\d+)/)?.[1] || url
  return m.replaceAll('{groupTitle}', title).replaceAll('/rtp/', `http://${url}/rtp/`);
};

const run = () => {
  readFile('./urls.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) throw err;
    console.log(data);
    const authorities = data.split('\n').map(row => {
      return row.match(/\/\/(.*:(\d+))/)[1];
    });
    console.log('authorities',authorities);
    const res = authorities.reduce((a, url)=>{
      return a + '\n' + generateContent(url);
    }, '');
    appendFile('./gather.m3u', res, (err) => {
      if (err) throw err;
      console.log('done!')
    });
  }); 
};

run();
