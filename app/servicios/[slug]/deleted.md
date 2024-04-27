<div className="grid md:grid-cols-5 grid-cols-3 gap-2 text-xs md:text-lg">
              <div
                onClick={() => setStep(1)}
                className={`rounded-xl ${
                  step === 1 ? "bg-[#0A86ED] text-white" : "bg-white"
                } border border-[#0A86ED]    p-2 flex justify-center items-center text-center `}
                role="button"
              >
                <span>Análisis e Investigación</span>
              </div>
              <div
                onClick={() => setStep(2)}
                className={`rounded-xl ${
                  step === 2 ? "bg-[#0A86ED] text-white" : "bg-white"
                } border border-[#0A86ED]  p-2 flex justify-center items-center text-center `}
                role="button"
              >
                <span>Planificación y Desarrollo</span>
              </div>
              <div
                onClick={() => setStep(3)}
                className={`rounded-xl ${
                  step === 3 ? "bg-[#0A86ED] text-white" : "bg-white"
                } border border-[#0A86ED] p-2 flex justify-center items-center text-center `}
                role="button"
              >
                <span> Implementación y Medición</span>
              </div>
            </div>

            <div className="mt-8">
              {step === 1 && (
                <RevealWrapper
                  origin="left"
                  duration={1500}
                  className={"w-full"}
                >
                  <div className="mt-12 grid grid-cols-2">
                    <div className="md:col-span-1 col-span-2">
                      <span className="text-3xl">Análisis e Investigación</span>
                    </div>
                    <div className="md:col-span-1 col-span-2 mt-4 md:mt-0">
                      <p>
                        El primer paso crucial es sumergirse en el mundo de tu
                        mercado, público objetivo y competidores. Esto implica
                        comprender las tendencias de la industria, identificar
                        las necesidades y preferencias de tu audiencia, y
                        analizar las fortalezas y debilidades de tus
                        competidores.
                      </p>
                    </div>
                  </div>
                  <img
                    className="w-full mt-8 rounded-lg"
                    src="https://img.freepik.com/vector-gratis/banner-marketing-digital_157027-1372.jpg"
                    alt=""
                  />
                </RevealWrapper>
              )}
              {step === 2 && (
                <RevealWrapper
                  origin="left"
                  duration={1500}
                  className={"w-full"}
                >
                  <div className="mt-12 grid grid-cols-2">
                    <div className="md:col-span-1 col-span-2">
                      <span className="text-3xl">
                        Planificación y Desarrollo
                      </span>
                    </div>
                    <div className="md:col-span-1 col-span-2 mt-4 md:mt-0">
                      <p>
                        Con base en el análisis previo, selecciona los canales
                        de marketing digital más adecuados para alcanzar tus
                        objetivos y conectar con tu público objetivo. Desarrolla
                        un plan de contenido sólido que incluya diferentes
                        formatos (texto, imágenes, videos) atractivo y relevante
                        para cada canal.
                      </p>
                    </div>
                  </div>
                  <img
                    className="w-full mt-8 rounded-lg"
                    src="https://img.freepik.com/vector-gratis/banner-marketing-digital_157027-1372.jpg"
                    alt=""
                  />
                </RevealWrapper>
              )}
              {step === 3 && (
                <RevealWrapper
                  origin="left"
                  duration={1500}
                  className={"w-full"}
                >
                  <div className="mt-12 grid grid-cols-2">
                    <div className="md:col-span-1 col-span-2">
                      <span className="text-3xl">
                        Implementación y Medición
                      </span>
                    </div>
                    <div className="md:col-span-1 col-span-2 mt-4 md:mt-0">
                      <p>
                        Llevamos el plan a la acción y ejecuta tu estrategia de
                        marketing digital en los canales elegidos. Interactúa
                        activamente con tu audiencia, respondiendo a
                        comentarios, mensajes y participando en conversaciones
                        en línea.
                      </p>
                    </div>
                  </div>
                  <img
                    className="w-full mt-8 rounded-lg"
                    src="https://img.freepik.com/vector-gratis/banner-marketing-digital_157027-1372.jpg"
                    alt=""
                  />
                </RevealWrapper>
              )}
            </div>
