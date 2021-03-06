uniform float uTime;
uniform float screenWidth;
uniform float timeMultiplier;
uniform float height;
uniform float frequency;
uniform float uVScale;
uniform float mouseX;

varying float xPos;

float PI = 3.14159;

float rand(vec2 c){
	return fract(sin(dot(c.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

float noise(vec2 p, float freq ){
	float unit = screenWidth/freq;
	vec2 ij = floor(p/unit);
	vec2 xy = mod(p,unit)/unit;
	//xy = 3.*xy*xy-2.*xy*xy*xy;
	xy = .5*(1.-cos(PI*xy));
	float a = rand((ij+vec2(0.,0.)));
	float b = rand((ij+vec2(1.,0.)));
	float c = rand((ij+vec2(0.,1.)));
	float d = rand((ij+vec2(1.,1.)));
	float x1 = mix(a, b, xy.x);
	float x2 = mix(c, d, xy.x);
	return mix(x1, x2, xy.y);
}

float pNoise(vec2 p, int res){
	float persistance = .5;
	float n = 0.;
	float normK = 0.;
	float f = 4.;
	float amp = 1.;
	int iCount = 0;
	for (int i = 0; i<50; i++){
		n+=amp*noise(p, f);
		f*=2.;
		normK+=amp;
		amp*=persistance;
		if (iCount == res) break;
		iCount++;
	}
	float nf = n/normK;
	return nf*nf*nf*nf;
}

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec2 myUv = uv * uVScale;

	float pos = (modelPosition.x + 1.5) / 3.;
    float proximityBetweenMouseAndPos = 1. - abs(pos - mouseX * .9);
    float impact = smoothstep(.9, .99, proximityBetweenMouseAndPos);

    modelPosition.y = noise(vec2(myUv.x, myUv.y + uTime * timeMultiplier * -1.), frequency) / (height - impact * 6.);

	vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
}