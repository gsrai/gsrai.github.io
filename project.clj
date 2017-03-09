(defproject personal-website "0.1.0-SNAPSHOT"
  :description "personal website (portfolio, blog etc)"
  :url "https://gsrai.github.io"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.456"]
                 [reagent "0.6.0"]]
  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  :plugins [[lein-npm "0.6.1"] 
            [lein-cljsbuild "1.1.5"]]
  :npm {:dependencies [[source-map-support "0.4.0"]]}

  :cljsbuild {:builds 
              ;; Build for development
              [{:id "dev" 
                :source-paths ["src"] 
                :figwheel false 
                :compiler 
                  {:optimizations :none
                   :output-to "resources/public/js/main.js" 
                   :output-dir "resources/public/js/dev/" 
                   :source-map true 
                   :pretty-print true}} 
               
               ;; Build for Production
               {:id "prod" 
                :source-paths ["src"] 
                :compiler 
                  {:optimizations :advanced
                   :output-to "resources/public/js/main.js" 
                   :pretty-print false 
                   :verbose true}}]} 
                   
  :scm {:name "git" 
        :url "https://github.com/gsrai/gsrai.github.io"}
  
  :source-paths ["src"]
  :clean-targets ^{:protect false} ["resources/public/js/"] 
  :target-paths ["resources/public/js/%s"])
